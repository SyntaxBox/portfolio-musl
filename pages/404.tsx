import Head from "next/head";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="description" content="404 Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center w-screen h-screen flex-col">
        <p className="font-bold text-6xl text-center">Error 404</p>
        <p className="font-bold text-3xl text-center"> Page Not Found</p>
        <Link className="text-green-400" href="/">
          Go Home
        </Link>
      </main>
    </>
  );
}

export default NotFound;
