import { ReactNode } from "react";

function Container({
  children,
  ...other
}: {
  children: ReactNode;
  other?: any;
}) {
  return (
    <section className="px-4 sm:px-4 py-2.5 rounded z-1 h-full w-full">
      <div
        {...other}
        className="h-full w-full container flex flex-wrap flex-col items-center justify-center mx-auto gap-6 max-w-[1000px]"
      >
        {children}
      </div>
    </section>
  );
}

export default Container;
