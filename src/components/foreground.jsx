import React, {useRef, useState}from "react";
import Card from "./card";

function Foreground() {
  const ref=useRef(null);

  const data = [
    {
      desc: "This is React File",
      fileSize: "9kb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
      },
    },
    {
      desc: "This file contains HTML,JS and CSS files",
      fileSize: ".2mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
      },
    },
    {
      desc: "Shazam the lightning Lord, Release in 2023",
      fileSize: "2.5gb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
      },
    },
    {
      desc: "Batman the dark Knight 720p , Release in 2018",
      fileSize: ".5gb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
      },
    },
  ];

  return (
    <div ref ={ref} className=" fixed z-[4] w-full h-screen flex gap-5 flex-wrap p-4">
      {data.map((doc) => (
        <Card doc={doc} reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
