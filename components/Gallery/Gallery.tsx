import React from "react";
import GalleryImage from "../GalleryImage/GalleryImage";

function Gallery({ gallery }: { gallery: { link: string; url: string }[] }) {
  return (
    <>
      <div className="hidden lg:flex flex-col lg:flex-row w-full gap-3">
        <div className="w-full grid gap-3 md:grid-cols-2 lg:grid-cols-1">
          {gallery.map((e, i) => {
            if (i >= 4) return null;
            else return <GalleryImage key={i} src={e.url} link={e.link} />;
          })}
        </div>
        <div className="w-full grid gap-3 md:grid-cols-2 lg:grid-cols-1">
          {gallery.map((e, i) => {
            if (i < 4 || i >= 8) return null;
            else return <GalleryImage key={i} src={e.url} link={e.link} />;
          })}
        </div>
        <div className="w-full grid gap-3 md:grid-cols-2 lg:grid-cols-1">
          {gallery.map((e, i) => {
            if (i < 8) return null;
            else return <GalleryImage key={i} src={e.url} link={e.link} />;
          })}
        </div>
      </div>
      <div className="lg:hidden w-full flex flex-col md:flex-row gap-3 max-w-[800px]">
        <div className="w-full flex flex-col gap-3 max-w-[600px] mx-auto">
          {gallery.map((e, i) => {
            if (i >= 6) return null;
            else return <GalleryImage key={i} src={e.url} link={e.link} />;
          })}
        </div>
        <div className="w-full flex flex-col gap-3 max-w-[600px] mx-auto">
          {gallery.map((e, i) => {
            if (i < 6) return null;
            else return <GalleryImage key={i} src={e.url} link={e.link} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Gallery;
