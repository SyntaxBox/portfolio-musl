import { Container } from "@/ui";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

import data from "@/data";
import Gallery from "@/components/Gallery/Gallery";
const { gallery } = data;
function Page() {
  return (
    <main>
      <Navbar active={2} />
      <div className="mt-[100px] md:mt-0">
        <Container>
          <h1 className="text-6xl font-bold">Gallery</h1>
          <Gallery gallery={gallery} />
        </Container>
      </div>
      <Footer />
    </main>
  );
}

export default Page;
