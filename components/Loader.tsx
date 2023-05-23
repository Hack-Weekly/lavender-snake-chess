import Image from "next/image";

type Props = {
  text: string;
};

export default function Loader({ text }: Props) {
  return (
    <main className="flex flex-col justify-center items-center">
      <Image
        className="animate-bounce"
        src="/chess.svg"
        alt="Chessss Logo"
        width={64}
        height={64}
        priority
      />
      <p className="animate-pulse">{text}</p>
    </main>
  );
}
