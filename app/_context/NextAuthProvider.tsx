"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Auth } from "@/app/_components/Auth";

type Props = {
  children?: React.ReactNode;
  session?: Session;
};

export const NextAuthProvider = ({ children, session }: Props) => {
  return (
    <SessionProvider session={session}>
      <Auth>{children}</Auth>
    </SessionProvider>
  );
};
