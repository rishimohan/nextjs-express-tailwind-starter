import {useEffect, useState} from "react";
import Head from "next/head";

export default function Home() {
  const [text, setText] = useState(null);

  useEffect(() => {
    getTextFromAPI();
  }, [])

  const getTextFromAPI = async () => {
    try {
      const data = await fetch(`/api/text`).then(async data => await data.json())
      setText({ heading: data?.heading, subHeading: data?.subHeading });
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <>
      <Head>
        <title>Next.js + TailwindCSS + Express</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Remove from here */}
        <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden dark:bg-[#222]">
          <h1 className="text-3xl font-black md:text-5xl dark:text-white">
            {text?.heading ?? ""}
          </h1>
          <h2 className="text-2xl font-semibold mt-3 text-gray-600">
            {text?.subHeading ?? ""}
          </h2>
        </div>
        {/* To here */}
      </main>
    </>
  );
}
