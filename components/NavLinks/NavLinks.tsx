import Link from "next/link";
import React, { useState } from "react";
import { List } from "react-bootstrap-icons";

function NavLinks({
  navButtons,
  active,
}: {
  navButtons: string[];
  active: number;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="md:hidden z-20">
      <List
        className="text-3xl cursor-pointer z-60"
        onClick={() => setShow(!show)}
      />
      <div
        style={{ transform: `${show ? "scaleY(0)" : "scaleY(1)"}` }}
        className="fixed left-0 top-[80px] w-screen flex flex-col items-center transition-all duration-300 ease-in-out origin-top bg-white dark:bg-zinc-900 "
      >
        {navButtons.map((e, i) => {
          return (
            <Link
              href={e === "home" ? "/" : e}
              key={i}
              className={`${
                i === active && "text-red-600 relative"
              } hover:text-red-600 capitalize w-full text-xl text-center p-2`}
            >
              {e}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavLinks;
