import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch("/tiket300.html")
      .then(res => res.text())
      .then(data => {
        // extract body innerHTML or render full html via iframe/doc
        setContent(data);
      });
  }, []);

  if (!content) {
    return <div className="bg-black text-white min-h-screen flex items-center justify-center">Loading TIKET300...</div>;
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
}
