import React, {
  ButtonHTMLAttributes,
  DOMAttributes,
  HTMLAttributes,
} from "react";

interface Props {
  [key: string]: any;
}

function LoadMore(props: Props) {
  return (
    <button
      {...props}
      type="button"
      className="text-white w-[136px] text-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      Load More ...
    </button>
  );
}

export default LoadMore;
