// import Image from "next/image";
"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col justify-center items-center gap-4">
      <h2 className="text-2xl font-bold">Create Game</h2>
      <button onClick={() => router.push("/pvp")}>Play with a Friend</button>
      <button onClick={() => router.push("/pvc")}>
        Play with the Computer
      </button>
      <button onClick={() => router.push("/cvc")}>
        Computer versus Computer
      </button>
    </main>
  );
}
