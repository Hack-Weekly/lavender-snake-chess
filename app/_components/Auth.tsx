import { useSession } from "next-auth/react";
import Image from "next/image";

type Props = {
  children?: React.ReactNode;
};

export const Auth = ({ children }: Props) => {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <main className="flex flex-col justify-center items-center">
        <Image
          className="animate-bounce"
          src="/chess.svg"
          alt="Chessss Logo"
          width={64}
          height={64}
        />
        <p className="animate-pulse">Loading Chessss...</p>
      </main>
    );
  }

  return <>{children}</>;
};
