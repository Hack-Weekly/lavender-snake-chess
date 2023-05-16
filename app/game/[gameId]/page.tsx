import Chessboard from "./Chessboard";

export default function GamePage() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="relative h-screen w-full">
        <div className="absolute max-w-md inset-[0] m-auto aspect-1">
          <Chessboard />
        </div>
      </div>
    </div>
  );
}
