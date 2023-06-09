"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Auth from "@/components/Auth";

type Props = {
  children?: React.ReactNode;
  session?: Session;
};

export default function NextAuthProvider({ children, session }: Props) {
  return (
    <SessionProvider session={session}>
      <Auth>{children}</Auth>
    </SessionProvider>
  );
}
