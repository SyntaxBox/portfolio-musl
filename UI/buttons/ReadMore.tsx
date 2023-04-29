import Link from "next/link";
import React from "react";

function ReadMore({
  href,
  className,
  ...other
}: {
  href: string;
  className?: string;
  other?: any;
}) {
  return (
    <Link
      href={href}
      className={`px-5 py-2.5 font-medium bg-green-100 hover:text-green-600 text-green-500 rounded-md text-sm w-fit dark:bg-green-900 dark:text-green-300 ${className}`}
      {...other}
    >
      Read more
    </Link>
  );
}

export default ReadMore;
