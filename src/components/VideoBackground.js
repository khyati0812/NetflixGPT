import React, { useEffect, useState } from "react";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import { useDispatch, useSelector } from "react-redux";
const VideoBackground = ({ movieId }) => {
  console.log(movieId);
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideos);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
