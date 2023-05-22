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
          className="animate-pulse"
          src="/chess.svg"
          alt="Chessss Logo"
          width={64}
          height={64}
        />
        <p>Loading Chessss...</p>
      </main>
    );
  }

  return <>{children}</>;
};
