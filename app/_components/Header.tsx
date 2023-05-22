import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex-none flex justify-between items-center px-4 pt-4">
      <Link href="/" className="flex gap-2 justify-center items-center">
        <Image src="/chess.svg" alt="Chessss Logo" width={48} height={48} />
        <h1 className="font-black hidden md:inline tracking-tighter">
          Chessss
        </h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        {/* TODO: Handle auth */}
        <Link href="/profile">Profile</Link>
      </nav>
    </header>
  );
}
