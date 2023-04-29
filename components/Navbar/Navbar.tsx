import Container from "@/UI/layout/Container";
import React from "react";
import data from "@/data";
import DarkModeButton from "../DarkMode/DarkMode";
import Link from "next/link";
import Image from "next/image";

const { navButtons, ProfileImage } = data;

function Navbar({ active }: { active: number }) {
  return (
    <Container>
      <div className=" w-full flex items-center justify-between">
        <Link href="/">
          <Image
            src={ProfileImage}
            alt="profile image"
            width={64}
            height={64}
            className="bg-cover bg-no-repeat rounded-full h-[64px] w-[64px]"
          />
        </Link>
        <div className="border-[1px] rounded-full shadow-lg shadow-zinc-800/5 dark:text-zinc-200 p-2 px-4">
          <div className="flex gap-6">
            {navButtons.map((e, i) => {
              return (
                <Link
                  href={e === "home" ? "/" : e}
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
        <DarkModeButton />
      </div>
    </Container>
  );
}

export default Navbar;
