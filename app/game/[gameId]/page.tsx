import GameBoard from "./Chessboard";
import styles from "./page.module.css";

export default function GamePage() {
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <GameBoard />
      </div>
    </div>
  );
}
