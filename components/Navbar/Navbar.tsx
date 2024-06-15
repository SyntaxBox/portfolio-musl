import { Container } from "@/ui";
import React from "react";
import data from "@/data";
import DarkModeButton from "../DarkMode/DarkMode";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "../NavLinks/NavLinks";

const { navButtons, ProfileImage } = data;

function Navbar({ active }: { active: number }) {
  return (
    <div className="fixed w-full md:relative top-0 left-0 z-50">
      <span className="absolute transition-all duration-300 ease-in-out top-0 left-0 bg-white dark:bg-zinc-900 md:hidden w-full h-[80px] z-10"></span>
      <Container>
        <nav className="w-full flex items-center justify-between">
          <Link href="/" className="z-50">
            <Image
              src={ProfileImage}
              alt="profile image"
              width={64}
              height={64}
              className="bg-cover bg-no-repeat rounded-full h-[64px] w-[64px] z-50"
            />
          </Link>
          <div className="hidden md:flex border-[1px] rounded-full shadow-lg shadow-zinc-800/5 dark:text-zinc-200 p-2 px-4">
            <div className="md:flex gap-6 ">
              {navButtons.map((e, i) => {
                return (
                  <Link
                    href={e === "home" ? "/" : `/${e}`}
                    key={i}
                    className={`${
                      i === active && "text-red-600 active-button relative"
                    } hover:text-red-600 capitalize`}
                  >
                    {e}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex gap-3 items-center z-30">
            <DarkModeButton />
            <NavLinks navButtons={navButtons} active={active} />
          </div>
        </nav>
      </Container>
    </div>
  );
}

export default Navbar;
