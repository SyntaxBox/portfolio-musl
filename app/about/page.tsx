import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import data from "@/data";
import { Container } from "@/ui";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import ParallaxTilt from "@/components/ParallaxTilt/ParallaxTilt";

const { aboutPage } = data;
const { title, p, images } = aboutPage;

function About() {
  return (
    <main className=" w-screen overflow-x-hidden">
      <Navbar active={1} />
      <div className="w-full flex items-center justify-center flex-col mt-[100px] md:mt-0">
        <Container>
          <div className="flex flex-col gap-5 mt-5 w-full">
            <h1 className="text-4xl md:text-5xl font-bold max-w-[700px] ">
              {title}
            </h1>
            <p className="max-w-[700px] text-gray-600">{p}</p>
          </div>
        </Container>
        <div className="flex items-center justify-center overflow-hidden h-[400px]">
          <div className="flex gap-4 md:gap-8 left-0 justify-center items-center">
            {images.map((image, i) => {
              const deg = i === 0 || i === 3 ? 4 : i === 1 || i === 4 ? -1 : 4;

              return (
                <div
                  key={i}
                  style={{ transform: `rotate(${deg}deg)` }}
                  className="w-[240px] md:w-[300px]"
                >
                  <ParallaxTilt>
                    <Image
                      src={image}
                      alt="project image"
                      width={300}
                      height={340}
                      className={`w-[240px] h-[240px] md:w-[300px] md:h-[340px] rounded-[24px] hover:scale-[1.09] transition-all duration-300`}
                    />
                  </ParallaxTilt>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default About;
