import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  console.log(title);
  console.log(overview);
  return (
    <div className="absolute text-white bg-gradient-to-r from-black pt-[20%] px-24 w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-3 px-12 text-xl rounded-lg hover:bg-opacity-80">
          <FaPlay className="inline-block" /> Play
        </button>
        <button className="bg-gray-500 text-white p-3 px-12 text-lg bg-opacity-75 rounded-lg ml-4">
          <FaInfoCircle className="inline-block" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
