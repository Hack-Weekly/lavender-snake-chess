import Chessboard from "@/app/_components/Chessboard";
import { Metadata } from "next";

type Props = {
  params: { gameId: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const id = params.gameId;
  return {
    title: `Match ${id} | Chessss`,
  };
}

export default function GamePage({ params }: Props) {
  return (
    <main className="relative">
      <div className="absolute portrait:w-[90vmin] landscape:w-[60vmin] inset-[0] m-auto aspect-1">
        <Chessboard />
      </div>
    </main>
  );
}
