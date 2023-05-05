import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function GalleryImage({ src, link }: { src: string; link: string }) {
  return (
    <div className="relative overflow-hidden lg:h-fit lg:w-fit">
      <span className="text-img absolute w-full h-full hover:bg-[#00000074] z-10 bg-transparent px-2 py-4 text-white transition-all ease-in-out duration-300 origin-top">
        <p className="translate-y-[-150px] transition-all ease-in-out duration-300 sm:text-xl lg:text-base">
          Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Repudi
          andae eos zobozores mouad chawi <br />
          <Link href={`projects/${link}`} className="text-red-400 underline">
            Read More ...
          </Link>
        </p>
      </span>
      <Image
        src={src}
        alt="gallery"
        width={400}
        height={400}
        className="w-full gallery-img transition-all duration-300"
      />
    </div>
  );
}

export default GalleryImage;
