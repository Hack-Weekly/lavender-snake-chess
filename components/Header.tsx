"use client";
import { Menu, Transition } from "@headlessui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Header() {
  const { data, status } = useSession();
  return (
    <header className="flex-none flex justify-between items-center px-4 pt-4">
      <Link href="/" className="flex gap-2 justify-center items-center">
        <Image src="/chess.svg" alt="Chessss Logo" width={48} height={48} />
        <h1 className="font-black hidden md:inline tracking-tighter">
          Chessss
        </h1>
      </Link>
      <nav className="flex gap-4 justify-center items-center">
        <Link href="/">Home</Link>
        {status === "authenticated" && data.user.image ? (
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white text-sm font-semibold text-gray-900 shadow-sm hover:grayscale grayscale-0 transition duration-150">
                <Image
                  src={data.user.image}
                  alt="Your Profile Picture"
                  width={32}
                  height={32}
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div>
                  <Menu.Item disabled>
                    {({ active }) => (
                      <div className="flex flex-col px-4 py-2 text-sm bg-white text-gray-900">
                        <p>Signed in as:</p>
                        <p className="font-semibold">{data.user.name}</p>
                      </div>
                    )}
                  </Menu.Item>
                </div>
                <div>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/profile"
                        className="ui-active:bg-gray-100 ui-active:text-gray-900 ui-not-active:text-gray-700 block px-4 py-2 text-sm">
                        Profile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => signOut()}
                        className="ui-active:bg-gray-100 ui-active:text-gray-900 ui-not-active:text-gray-700 block w-full px-4 py-2 text-left text-sm">
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        ) : (
          <button
            onClick={() => signIn("discord")}
            className="flex flex-nowrap items-center gap-1.5">
            <Image
              src="/discord.svg"
              alt="Discord Sign In"
              width={16}
              height={16}
              priority
            />
            <span>Sign in</span>
          </button>
        )}
      </nav>
    </header>
  );
}
