"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url,
      shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUrl("");
        setShortUrl("");
        const link = `${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`;
        setGenerated(link);
        setCopied(false); // reset copy status
        alert(result.message);
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl text-center">Generate your short URLs</h1>

      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="px-4 py-2 focus:outline-purple-600 outline-black"
          placeholder="Enter your URL"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        <input
          type="text"
          className="px-4 py-2 focus:outline-purple-600 rounded-md"
          placeholder="Enter your preferred short URL text"
          onChange={(e) => setShortUrl(e.target.value)}
          value={shortUrl}
        />
        <button
          className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white"
          onClick={generate}
        >
          Generate
        </button>
      </div>

      {generated && (
        <div className="flex flex-col gap-2 mt-4">
          <code>
            Your link:{" "}
            <Link target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
          <button
            onClick={copyToClipboard}
            className="bg-purple-600 text-white font-medium px-4 py-1 rounded shadow hover:bg-purple-700 transition"
          >
            {copied ? "Copied!" : "Copy to Clipboard"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Shorten;
