import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[25%] md:pt-[17%] px-8 md:px-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-2 md:my-0">
        <button className="bg-white text-black py-1 md:py-2 pr-3 md:pr-10 text-sm md:text-xl rounded-lg relative pl-7 md:pl-15 hover:bg-white/80 ">
          {" "}
          <span className="text-sm md:text-xl absolute left-3 md:left-10 ">▶︎ </span>Play
        </button>
        <button className=" hidden md:inline-block mx-2 bg-gray-500/80 text-black p-2 px-10 text-xl rounded-lg hover:bg-gray-500/60">
          {" "}
          <strong>ⓘ</strong> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
