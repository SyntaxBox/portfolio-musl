import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactCardFlip from "react-card-flip";
function GalleryImage({ src, link }: { src: string; link: string }) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <ReactCardFlip isFlipped={isFlipped}>
        <div className="relative overflow-hidden lg:h-fit lg:w-fit">
          <Image
            src={src}
            alt="gallery"
            width={400}
            height={400}
            className="w-full gallery-img transition-all duration-300"
          />
        </div>
        <div className="relative overflow-hidden lg:h-fit lg:w-fit">
          <span className="text-img absolute w-full h-full bg-[#00000074] z-10 px-2 py-4 text-white">
            <p className="sm:text-xl lg:text-base">
              Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Repudi
              andae eos zobozores mouad chawi <br />
              <Link
                href={`projects/${link}`}
                className="text-red-400 underline"
              >
                Read More ...
              </Link>
            </p>
          </span>
          <Image
            src={src}
            alt="gallery"
            width={400}
            height={400}
            className="w-full gallery-img transition-all duration-300 filter grayscale"
          />
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default GalleryImage;
