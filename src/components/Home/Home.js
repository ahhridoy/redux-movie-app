import React, { useEffect } from "react";
import movieApi from "../../common/api/movieApi";
import MovieListing from "../MovieListing/MovieListing";
import { apiKey } from "../../common/api/MovieApiKeys";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${apiKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Error:", err);
        });
      dispatch(addMovies(response.data));
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
