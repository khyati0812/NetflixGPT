import React, { useEffect } from "react";
import options from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideos } from "../utils/movieSlice";
const useMovieTrailer = (movieId) => {
  console.log(movieId);
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVideos = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
          options
        );
        const json = await data.json();
        console.log(json);
        const filterData = json?.results?.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterData
          ? filterData[0]
          : json.results && json.results.length > 0
          ? json.results[0]
          : null;

        console.log(filterData);
        console.log(trailer);
        if (trailer) {
          dispatch(addTrailerVideos(trailer));
          console.log(trailer.key);
        }
      } catch (error) {
        console.error("Error fetching movie videos:", error);
      }
    };

    getMovieVideos(); // Call the function when the component mounts
  }, [movieId]); // Call the effec
  return <div>useMovieTrailer</div>;
};

export default useMovieTrailer;
