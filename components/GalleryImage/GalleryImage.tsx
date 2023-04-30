import React from "react";
import Image from "next/image";

function GalleryImage({ src }: { src: string }) {
  return (
    <div className="overflow-hidden">
      <Image
        src={src}
        alt="gallery"
        width={400}
        height={400}
        className="w-full transition-all duration-300 hover:scale-[1.10]"
      />
    </div>
  );
}

export default GalleryImage;
