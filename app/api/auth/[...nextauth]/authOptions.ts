import { type NextAuthOptions, type DefaultSession } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { DetaAdapter } from "next-auth-deta";
import { Deta } from "deta";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

export const authOptions: NextAuthOptions = {
  adapter: DetaAdapter(Deta(process.env.DETA_COLLECTION_KEY)),
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID
        ? process.env.DISCORD_CLIENT_ID
        : "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET
        ? process.env.DISCORD_CLIENT_SECRET
        : "",
    }),
  ],
};
