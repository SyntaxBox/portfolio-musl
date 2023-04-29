import React from "react";
import { Icon } from "react-bootstrap-icons";

function SocialLink({
  Icon,
  link,
  name,
}: {
  Icon: Icon;
  link: string;
  name: string;
}) {
  return (
    <a href={link} className="flex items-center gap-6 social">
      <Icon className="text-3xl text-gray-500 dark:text-gray-400 transition-all duration-300 ease-in-out" />
      <p className="text-gray-800 dark:text-gray-200  font-bold transition-all duration-300 ease-in-out">
        Follow on {name}
      </p>
    </a>
  );
}

export default SocialLink;
