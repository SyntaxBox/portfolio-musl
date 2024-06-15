import React from "react";
import data from "@/data";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Container } from "@/ui";
import Carousel from "@/components/Carousel/Carousel";
import Image from "next/image";
import { notFound } from "next/navigation";

function Page({ params }: { params: { project: string } }) {
  const { project } = params;
  const { projects } = data;
  console.log(project);
  const projectData = projects.find((p) => p[project]);
  console.log(projectData);
  if (!projectData) notFound();
  const content = projectData[project];
  return (
    <main className="flex items-center justify-between flex-col">
      <Navbar active={2} />
      <span className="h-[100px] md:h-[50px]"></span>
      <Container>
        <div className="flex gap-3 flex-col md:flex-row">
          <div className="relative mx-auto max-w-[550px] min-h-full">
            <div className="w-full md:min-w-[400px] sticky top-[30px] left-0">
              <Carousel autoSlide>
                {content.images.map((e, i) => {
                  return (
                    <Image
                      width={512}
                      alt="carousel image"
                      src={e}
                      key={i}
                      className="h-[450px] min-w-full object-cover"
                    />
                  );
                })}
              </Carousel>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <article>
              <h2 className="font-bold text-5xl">
                <strong>{content.title}</strong>
              </h2>
              <div>
                <div>
                  <div>
                    <h4>
                      <strong>This is my rude project</strong>
                    </h4>
                    <p>
                      Google has focused, as usual, on the new features it
                      offers, such as a 90Hz screen and Soli gestures to control
                      the phone remotely without touching it, Google also talked
                      a lot about facial recognition technology and how to
                      unlock the phone from all directions.
                    </p>
                    <p>
                      <br />
                      Google also talked about the great development of the
                      camera and the advantages of Artificial Intelligence that
                      will be used to deliver the best quality of regular images
                      and even images in low light with new camera features such
                      as rounding, star shooting modes, night mode, portrait,
                      Live HDR+, Dual-exposure and more.
                    </p>
                    <h3>
                      <strong>Google Pixel 4 specifications</strong>
                    </h3>
                    <strong>
                      <div>
                        <ul>
                          <li>
                            Screen: 5.7-inch Olyde with FHD+ resolution and 90Hz
                            refresh rate.
                          </li>
                          <li>Processor: From Qualcomm Snapdragon Class 85.</li>
                          <li>Random memory: 6GB.</li>
                          <li>Storage: 64GB/128GB.</li>
                          <li>Rear cameras: 16MP/12MP.</li>
                          <li>Selfie camera: 8MP.</li>
                          <li>
                            Battery: With a capacity of 2800mAh supports fast
                            charging.
                          </li>
                          <li>Order: Android 10.</li>
                          <li>
                            Other features: air gestures , two stereo speakers-
                            Type C port - face recognition - fast charging 18W -
                            3-year updates and unlimited storage of photos and
                            videos on Google Photo.
                          </li>
                          <li>Colors: white- black- orange.</li>
                        </ul>
                      </div>
                    </strong>
                    <h3>
                      <strong>Google Pixel 4XL Specifications</strong>
                    </h3>
                    <strong>
                      <div>
                        <ul>
                          <li>
                            Screen: 6.3-inch Olyde with FHD+ resolution and 90Hz
                            refresh rate.
                          </li>
                          <li>Processor: From Qualcomm Snapdragon Class 85.</li>
                          <li>Random memory: 6GB.</li>
                          <li>Storage: 64GB/128GB.</li>
                          <li>Rear cameras: 16MP/12MP.</li>
                          <li>Selfie camera: 8MP.</li>
                          <li>
                            Battery: With a capacity of 3700mAh supports fast
                            charging.
                          </li>
                          <li>Order: Android 10.</li>
                          <li>
                            Other features: air gestures , two stereo speakers-
                            Type C port - face recognition - fast charging 18W -
                            3-year updates and unlimited storage of photos and
                            videos on Google Photo.
                          </li>
                          <li>Colors: white- black- orange.</li>
                        </ul>
                      </div>
                    </strong>
                    <br />
                    <p>
                      Both phones will be available for pre-booking from today
                      and the price of the Pixel 4 will start at $799 for 64GB,
                      while the price of the Pixel 4XL will start at $899 for
                      64GB and the two phones will be available for sale on the
                      market from October 24.
                    </p>
                  </div>
                </div>
                <div>
                  <br />
                </div>
              </div>
            </article>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
}

export default Page;
