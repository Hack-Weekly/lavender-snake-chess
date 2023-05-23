"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import Image from "next/image";
import { useState } from "react";

export default function Profile() {
  const router = useRouter();
  const [isNotAuthenticated, setIsNotAuthenticated] = useState(false);
  const { data, status } = useSession({
    required: true,
    onUnauthenticated() {
      setIsNotAuthenticated(true);
      setTimeout(() => router.push("/"), 2000);
    },
  });
  if (status === "loading") {
    if (isNotAuthenticated) return <Loader text="You are not signed in!" />;
    return <Loader text="Checking authentication status..." />;
  }
  return (
    <main className="flex flex-col items-center">
      <div className="flex gap-2 items-center">
        <Image
          src={data.user.image ? data.user.image : "/chessss.svg"}
          alt="Your Profile Picture"
          height={64}
          width={64}
          placeholder="empty"
        />
        <div className="flex flex-col">
          {data.user.name ? (
            <p className="font-semibold">{data.user.name}</p>
          ) : (
            ""
          )}
          {data.user.email ? <p>{data.user.email}</p> : ""}
        </div>
      </div>
    </main>
  );
}
