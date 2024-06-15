import { Container } from "@/ui";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import React from "react";
import data from "@/data";
import SocialLink from "@/components/SocialLink/SocialLink";
import {
  Behance,
  EnvelopeFill,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
import ParallaxTilt from "@/components/ParallaxTilt/ParallaxTilt";

const { contact } = data;
const { image, socialLinks, email } = contact;
function Contact() {
  return (
    <main className="flex items-center justify-between flex-col min-h-screen">
      <Navbar active={4} />
      <span className="h-[100px] md:hidden"></span>
      <Container>
        <div className="flex flex-col md:flex-row gap-[80px] items-center w-full">
          <ParallaxTilt>
            <Image
              src={image}
              alt="profile image"
              width={380}
              height={380}
              className="w-[300px] h-[300px] bg-contain rounded-[16px] rotate-[3deg] md:h-[380px] md:w-[380px]"
            />
          </ParallaxTilt>
          <div className="flex flex-col justify-between h-full gap-6">
            <SocialLink
              Icon={Facebook}
              link={socialLinks.facebook}
              name={"Facebook"}
            />
            <SocialLink
              Icon={Instagram}
              link={socialLinks.instagram}
              name={"Instagram"}
            />
            <SocialLink
              Icon={Twitter}
              link={socialLinks.twitter}
              name={"Twitter"}
            />
            <SocialLink
              Icon={Behance}
              link={socialLinks.behance}
              name={"Behance"}
            />
            <SocialLink
              Icon={Youtube}
              link={socialLinks.youtube}
              name={"Youtube"}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <span className="flex items-center justify-center gap-3 mt-4">
            <EnvelopeFill className="text-2xl text-gray-500 dark:text-gray-400" />{" "}
            <p className="text-gray-700 dark:text-gray-300 text-xl">{email}</p>
          </span>
        </div>
      </Container>
      <Footer />
    </main>
  );
}

export default Contact;
