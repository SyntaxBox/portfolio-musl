import React from "react";
import { Icon } from "react-bootstrap-icons";

function Card({
  Icon,
  title,
  p,
  exp,
}: {
  Icon: Icon;
  title: string;
  p: string;
  exp: number;
}) {
  return (
    <div className=" flex rounded-lg bg-zinc-50 dark:bg-zinc-800 border-2 border-gray-700 gap-5 p-4 transition-all duration-300 ease-in-out hover:scale-105">
      <div className="w-[360px] flex flex-col gap-3 items-center justify-center dark:text-gray-200">
        <Icon className="text-5xl" />
        <p className="text-xl font-bold text-center">{title}</p>
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-red-600 dark:text-red-400 text-xl">
          [{exp} years of experience]
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-lg">{p}</p>
      </div>
    </div>
  );
}

export default Card;
