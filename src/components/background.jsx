import React from "react";

function Background() {
  return (
    <div className="fixed w-full h-screen z-[2]">
      <nav className="absolute top-20 w-full text-xl text-zinc-500 text-center font-semibold">
        Documents.
      </nav>
      <h1 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-60%] text-[12rem] text-zinc-700 leading-none tracking-lighter ">
        DOCS.
      </h1>
    </div>
  );
}

export default Background;
