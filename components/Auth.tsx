import { useSession } from "next-auth/react";
import Loader from "@/components/Loader";

type Props = {
  children?: React.ReactNode;
};

export default function Auth({ children }: Props) {
  const { status } = useSession();

  if (status === "loading") {
    <Loader text="Chessss" />;
  }

  return <>{children}</>;
}
