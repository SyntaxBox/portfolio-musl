import { Container } from "@/ui";
import React from "react";
import data from "@/data";
import Link from "next/link";

const { navButtons, name } = data;

function Footer() {
  return (
    <div className="w-full border-t py-5">
      <Container>
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between w-full">
          <div className="grid grid-cols-3 md:grid-cols-6  gap-6">
            {navButtons.map((e, i) => {
              return (
                <Link
                  href={e === "home" ? "/" : e}
                  key={i}
                  className="capitalize hover:text-red-500 transition-colors"
                >
                  {e}
                </Link>
              );
            })}
          </div>
          <p className="text-gray-500">
            &#169; {new Date(Date.now()).getFullYear()} {name}. All rights
            reserved
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
