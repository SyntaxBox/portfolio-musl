import React from "react";
import GalleryImage from "../GalleryImage/GalleryImage";
import { StaticImageData } from "next/image";

function Gallery({
  gallery,
}: {
  gallery: { link: string; url: string | StaticImageData }[];
}) {
  const perColumn = Math.ceil(gallery.length / 3);
  const columns = [
    gallery.slice(0, perColumn),
    gallery.slice(perColumn, perColumn * 2),
    gallery.slice(perColumn * 2),
  ];
  const perColumnTabledAndMobile = Math.ceil(gallery.length / 2);
  const columnsTabletAndMobile = [
    gallery.slice(0, perColumnTabledAndMobile),
    gallery.slice(perColumnTabledAndMobile, gallery.length),
  ];
  return (
    <>
      <div className="hidden lg:flex w-full gap-3">
        {columns.map((column, i) => (
          <div key={i} className="w-full flex flex-col gap-3 justify-between">
            {column.map((e, j) => (
              <GalleryImage key={j} src={e.url} link={e.link} />
            ))}
          </div>
        ))}
      </div>
      <div className="lg:hidden flex flex-col md:flex-row w-full gap-3">
        {columnsTabletAndMobile.map((column, i) => (
          <div key={i} className="w-full flex flex-col gap-3">
            {column.map((e, j) => (
              <GalleryImage key={j} src={e.url} link={e.link} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
