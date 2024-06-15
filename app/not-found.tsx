import Head from "next/head";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <main className="flex items-center justify-center w-screen h-screen flex-col">
      <p className="font-bold text-6xl text-center">Error 404</p>
      <p className="font-bold text-3xl text-center">Page Not Found</p>
      <Link className="text-green-400" href="/">
        Go Home
      </Link>
    </main>
  );
}

export default NotFound;
