import Container from "@/UI/layout/Container";
import React from "react";
import data from "@/data";
import Link from "next/link";

const { navButtons, name } = data;

function Footer() {
  return (
    <div className="w-full border-t py-5">
      <Container>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-6">
            {navButtons.map((e, i) => {
              return (
                <Link
                  href={e === "home" ? "/" : e}
                  key={i}
                  className="capitalize"
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
