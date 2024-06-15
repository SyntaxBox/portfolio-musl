import { Poppins } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Providers from "./providers";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400"] });

export const metadata = {
  title: "Portfolio Musl",
  description: "Portfolio Musl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
