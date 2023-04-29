import React, { ReactNode } from "react";

function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-gray-400 md:text-lg text-center font-light max-w-[1000px]">
      {children}
    </p>
  );
}

export default P;
