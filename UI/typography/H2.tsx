import React, { ReactNode } from "react";

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-gray-600 uppercase text-3xl font-light tracking-[5px]">
      {children}
    </h2>
  );
}

export default H2;
