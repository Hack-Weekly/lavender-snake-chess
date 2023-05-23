import Chessboard from "@/components/Chessboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Computer Versus Computer | Chessss",
};

export default function GamePage() {
  return (
    <main className="relative">
      <div className="absolute portrait:w-[90vmin] landscape:w-[60vmin] inset-[0] m-auto aspect-1">
        <Chessboard />
      </div>
    </main>
  );
}
