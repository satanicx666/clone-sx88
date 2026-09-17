import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch("/original_index.html")
      .then(res => res.text())
      .then(data => setContent(data));
  }, []);
  
  return (
    <>
      <Head>
        <title>Dewi11 | Slot terbaik</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
