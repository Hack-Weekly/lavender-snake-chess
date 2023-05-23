// import Image from "next/image";
"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";

export default function Profile() {
  const router = useRouter();
  const { data, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/");
    },
  });
  if (status === "loading") {
    return <Loader text="Profile" />;
  }
  return <main>I am the profile page.</main>;
}
