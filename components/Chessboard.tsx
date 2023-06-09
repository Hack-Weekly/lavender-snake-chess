"use client";

import { Chess, ChessInstance } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Square } from "react-chessboard/dist/chessboard/types";

export default function GameBoard() {
  const [game, setGame] = useState(new Chess());
  const [moveFrom, setMoveFrom] = useState<Square>();
  const [rightClickedSquares, setRightClickedSquares] = useState<{
    [x: string]:
      | { backgroundColor: string }
      | { backgroundColor: string }
      | undefined;
  }>({});
  const [moveSquares, setMoveSquares] = useState({});
  const [optionSquares, setOptionSquares] = useState({});

  function safeGameMutate(modify: (game: ChessInstance) => void) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  function getMoveOptions(square: Square) {
    const moves = game.moves({
      square,
      verbose: true,
    });
    if (moves.length === 0) {
      return false;
    }

    const newSquares: Record<string, Object> = {};
    moves.map((move) => {
      newSquares[move.to] = {
        background:
          game.get(move.to) &&
          game.get(move.to)!.color !== game.get(square)!.color
            ? "radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)"
            : "radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)",
        borderRadius: "50%",
      };
      return move;
    });
    newSquares[square] = {
      background: "rgba(0, 127, 255, 0.4)",
    };
    setOptionSquares(newSquares);
    return true;
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();

    // exit if the game is over
    if (game.game_over() || game.in_draw() || possibleMoves.length === 0)
      return;

    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    safeGameMutate((game) => {
      game.move(possibleMoves[randomIndex]);
    });
  }

  function onSquareClick(square: Square) {
    setRightClickedSquares({});

    function resetFirstMove(square: Square) {
      const hasOptions = getMoveOptions(square);
      if (hasOptions) setMoveFrom(square);
    }

    // from square
    if (!moveFrom) {
      resetFirstMove(square);
      return;
    }

    // attempt to make move
    const gameCopy = { ...game };
    const move = gameCopy.move({
      from: moveFrom,
      to: square,
      promotion: "q", // always promote to a queen for example simplicity
    });
    setGame(gameCopy);

    // if invalid, setMoveFrom and getMoveOptions
    if (move === null) {
      resetFirstMove(square);
      return;
    }

    setTimeout(makeRandomMove, 300);
    setMoveFrom(undefined);
    setOptionSquares({});
  }

  function onSquareRightClick(square: Square) {
    const colour = "rgba(0, 0, 255, 0.4)";
    setRightClickedSquares({
      ...rightClickedSquares,
      [square]:
        rightClickedSquares[square] &&
        rightClickedSquares[square]!.backgroundColor === colour
          ? undefined
          : { backgroundColor: colour },
    });
  }
  return (
    <>
      <Chessboard
        id="board"
        animationDuration={200}
        arePiecesDraggable={false}
        position={game.fen()}
        onSquareClick={onSquareClick}
        onSquareRightClick={onSquareRightClick}
        customBoardStyle={{
          borderRadius: "0.25rem",
        }}
        customSquareStyles={{
          ...moveSquares,
          ...optionSquares,
          ...rightClickedSquares,
        }}
        customDarkSquareStyle={{ backgroundColor: "#6667AB" }}
        customLightSquareStyle={{ backgroundColor: "#E6E6FA" }}
      />
      <button
        onClick={() => {
          safeGameMutate((game) => {
            game.reset();
          });
          setMoveSquares({});
          setRightClickedSquares({});
        }}>
        Reset
      </button>
      <button
        onClick={() => {
          safeGameMutate((game) => {
            game.undo();
          });
          setMoveSquares({});
          setRightClickedSquares({});
        }}>
        Undo
      </button>
    </>
  );
}
