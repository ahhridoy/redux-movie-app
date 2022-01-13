import React, { useEffect } from "react";
import movieApi from "../../common/api/movieApi";
import MovieListing from "../MovieListing/MovieListing";
import { apiKey } from "../../common/api/MovieApiKeys";

const Home = () => {
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi.get(
        `?apiKey=${apiKey}&s=${movieText}&type=movie`
      ).catch((err) => {
        console.log("Error:", err);
      });
      console.log("the response from api", response);
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
