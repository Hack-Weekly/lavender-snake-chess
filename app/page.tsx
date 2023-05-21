// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-4">
      <h2 className="text-2xl font-bold">Create Game</h2>
      <button>Play with a Friend</button>
      <button>Play with the Computer</button>
      <button>Computer versus Computer</button>
    </main>
  );
}
