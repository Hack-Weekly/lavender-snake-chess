import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex-none px-4 pb-4 flex justify-between flex-wrap">
      <p>
        Copyright © 2023{" "}
        <Link
          href="https://github.com/orgs/Hack-Weekly/teams/lavender-snake"
          target="_blank"
          rel="nofollow noopener">
          Team Lavender Snake
        </Link>
        .<span className="md:inline hidden"> All rights reserved.</span>
      </p>
      <Link
        href="https://github.com/Hack-Weekly/lavender-snake-chess"
        target="_blank"
        rel="nofollow noopener">
        Github
      </Link>
    </footer>
  );
}
