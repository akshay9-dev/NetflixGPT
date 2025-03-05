import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[17%] px-14 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black py-2 pr-10 text-xl rounded-lg relative pl-15 hover:bg-white/80">
          {" "}
          <span className="text-xl absolute left-10">▶︎ </span>Play
        </button>
        <button className="mx-2 bg-gray-500/80 text-black p-2 px-10 text-xl rounded-lg hover:bg-gray-500/60">
          {" "}
          <strong>ⓘ</strong> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
