import { Container } from "@/ui";
import Navbar from "@/components/Navbar/Navbar";
import data from "@/data";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import ParallaxTilt from "@/components/ParallaxTilt/ParallaxTilt";

const { homePage } = data;

function Page() {
  return (
    <main className="flex flex-col gap-[40px]">
      <Navbar active={0} />
      <div className="mt-[100px] md:mt-0">
        <Container>
          <div className="flex gap-[80px]">
            <div className="flex flex-col items-center gap-[90px] lg:gap-9">
              <h1 className="text-5xl font-bold max-w-[600px]">
                {homePage.title[0]}{" "}
                <span className="text-red-600 text-5xl md:text-6xl">
                  {homePage.title[1]}
                </span>{" "}
                <span className="text-5xl">{homePage.title[2]}</span>
              </h1>
              <div className="flex flex-col gap-6 text-gray-500 max-w-[600px]">
                {homePage.paragraphs.map((e, i) => {
                  return (
                    <p key={i} className="leading-7">
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="relative min-h-full">
              <ParallaxTilt className="md:sticky top-[30px] right-0">
                <Image
                  src={homePage.image}
                  alt="profile image"
                  width={380}
                  height={380}
                  className="bg-contain rounded-[16px] rotate-[3deg] h-[380px] w-[380px] hidden lg:block"
                />
              </ParallaxTilt>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  );
}

export default Page;
