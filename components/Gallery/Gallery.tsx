import Image from "next/image";
import React from "react";

function Gallery({ gallery }: { gallery: string[] }) {
  return (
    <>
      <div className="hidden lg:flex flex-col lg:flex-row w-full gap-3">
        <div className="w-full grid gap-3 md:grid-cols-2 lg:grid-cols-1">
          {gallery.map((e, i) => {
            if (i >= 4) return null;
            else
              return (
                <div className="overflow-hidden">
                  <Image
                    src={e}
                    alt="gallery"
                    width={400}
                    height={400}
                    className="w-full transition-all duration-300 hover:scale-[1.10]"
                  />
                </div>
              );
          })}
        </div>
        <div className="w-full grid gap-3 md:grid-cols-2 lg:grid-cols-1">
          {gallery.map((e, i) => {
            console.log(i >= 4 && i <= 8 && i);
            if (i < 4 || i >= 8) return null;
            else
              return (
                <div className="overflow-hidden">
                  <Image
                    src={e}
                    alt="gallery"
                    width={400}
                    height={400}
                    className="w-full transition-all duration-300 hover:scale-[1.10]"
                  />
                </div>
              );
          })}
        </div>
        <div className="w-full grid gap-3 md:grid-cols-2 lg:grid-cols-1">
          {gallery.map((e, i) => {
            console.log(i >= 4 && i <= 8 && i);
            if (i < 8) return null;
            else
              return (
                <div className="overflow-hidden">
                  <Image
                    src={e}
                    alt="gallery"
                    width={400}
                    height={400}
                    className="w-full transition-all duration-300 hover:scale-[1.10]"
                  />
                </div>
              );
          })}
        </div>
      </div>
      <div className="lg:hidden w-full flex flex-col md:flex-row gap-3">
        <div className="w-full flex flex-col gap-3">
          {gallery.map((e, i) => {
            if (i >= 6) return null;
            else
              return (
                <div className="overflow-hidden">
                  <Image
                    src={e}
                    alt="gallery"
                    width={400}
                    height={400}
                    className="w-full transition-all duration-300 hover:scale-[1.10]"
                  />
                </div>
              );
          })}
        </div>
        <div className="w-full flex flex-col gap-3">
          {gallery.map((e, i) => {
            if (i < 6) return null;
            else
              return (
                <div className="overflow-hidden">
                  <Image
                    src={e}
                    alt="gallery"
                    width={400}
                    height={400}
                    className="w-full transition-all duration-300 hover:scale-[1.10]"
                  />
                </div>
              );
          })}
        </div>
      </div>
    </>
  );
}

export default Gallery;
