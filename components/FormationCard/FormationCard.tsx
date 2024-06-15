import React from "react";
import { Icon } from "react-bootstrap-icons";
import "./styles.css";
import ParallaxTilt from "../ParallaxTilt/ParallaxTilt";
function FormationCard({
  Icon,
  title,
  p,
  href,
}: {
  Icon: Icon;
  title: string;
  p: string;
  href: string;
}) {
  return (
    <ParallaxTilt>
      <div className="formation flex flex-col items-center justify-center rounded-lg bg-zinc-50 dark:bg-zinc-800 border-2 border-gray-700 gap-5 p-4 z-0 h-full">
        <div className="w-[360px] icon flex flex-col gap-3 items-center justify-center dark:text-gray-200 hover:text-red-500">
          <Icon className="text-5xl" />
          <p className="text-xl font-bold text-center">{title}</p>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-gray-600 dark:text-gray-400 text-lg">{p}</p>
        </div>
        <a className="text-red-600 cursor-pointer underline" href={href}>
          Enroll Now!
        </a>
      </div>
    </ParallaxTilt>
  );
}

export default FormationCard;
