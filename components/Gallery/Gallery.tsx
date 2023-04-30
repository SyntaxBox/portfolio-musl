import Image from "next/image";
import React from "react";
import GalleryImage from "../GalleryImage/GalleryImage";

function Gallery({ gallery }: { gallery: string[] }) {
  return (
    <>
      <div className="hidden lg:flex flex-col lg:flex-row w-full gap-3">
        <div className="w-full grid gap-3 md:grid-cols-2 lg:grid-cols-1">
          {gallery.map((e, i) => {
            if (i >= 4) return null;
            else return <GalleryImage src={e} />;
          })}
        </div>
        <div className="w-full grid gap-3 md:grid-cols-2 lg:grid-cols-1">
          {gallery.map((e, i) => {
            console.log(i >= 4 && i <= 8 && i);
            if (i < 4 || i >= 8) return null;
            else return <GalleryImage src={e} />;
          })}
        </div>
        <div className="w-full grid gap-3 md:grid-cols-2 lg:grid-cols-1">
          {gallery.map((e, i) => {
            console.log(i >= 4 && i <= 8 && i);
            if (i < 8) return null;
            else return <GalleryImage src={e} />;
          })}
        </div>
      </div>
      <div className="lg:hidden w-full flex flex-col md:flex-row gap-3">
        <div className="w-full flex flex-col gap-3">
          {gallery.map((e, i) => {
            if (i >= 6) return null;
            else return <GalleryImage src={e} />;
          })}
        </div>
        <div className="w-full flex flex-col gap-3">
          {gallery.map((e, i) => {
            if (i < 6) return null;
            else return <GalleryImage src={e} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Gallery;
