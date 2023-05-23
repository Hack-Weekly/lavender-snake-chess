"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { data } = useSession();
  return (
    <header className="flex-none flex justify-between items-center px-4 pt-4">
      <Link href="/" className="flex gap-2 justify-center items-center">
        <Image src="/chess.svg" alt="Chessss Logo" width={48} height={48} />
        <h1 className="font-black hidden md:inline tracking-tighter">
          Chessss
        </h1>
      </Link>
      <nav className="flex gap-4 justify-center items-center">
        <Link href="/">Home</Link>
        {/* TODO: Handle auth */}
        {data && data.user.image ? (
          <Link
            href="/profile"
            className="flex flex-nowrap items-center gap-1.5">
            <Image
              src={data.user.image}
              alt="Profile Picture"
              width={16}
              height={16}
            />
            <span className="max-w-[7ch] overflow-hidden text-ellipsis">
              {data.user.name ? data.user.name : "You"}
            </span>
          </Link>
        ) : (
          <button
            onClick={() => signIn("discord")}
            className="flex flex-nowrap items-center gap-1.5">
            <Image
              src="/discord.svg"
              alt="Discord Sign In"
              width={16}
              height={16}
              priority
            />
            <span>Sign in</span>
          </button>
        )}
      </nav>
    </header>
  );
}
