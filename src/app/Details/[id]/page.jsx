"use client";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import MovieCard from "../../../Card/MovieCard";
import StarCast from "../../../Services/Starcast";
import Crew from "../../../Services/Crew";
import Trailer from "../../../Services/Trailer";

function MovieDetails() {
  const params = useParams();
  console.log(params.id);
  const [movie, setMovie] = useState(null);
  const trailerRef = useRef(null); // Create a ref for the Trailer component
  const [playTrailer, setPlayTrailer] = useState(false); // State to manage trailer playback

  const apiKey = "5e5f8751bb26571c68636e877ecc857f";

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        let url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch movie");
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [apiKey, params.id]);

  const handlePlayTrailer = () => {
    setPlayTrailer(true);
    trailerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  console.log(movie);
  return (
    <div>
      {movie && <MovieCard movie={movie} onPlayTrailer={handlePlayTrailer} />}
      <StarCast movieid={params.id} />
      <Crew movieid={params.id} />
      <div ref={trailerRef}>
        {" "}
        {/* Attach ref to Trailer component */}
        <Trailer
          movieid={params.id}
          url={movie && movie.backdrop_path}
          mainurl={movie && movie.poster_path}
          playTrailer={playTrailer}
        />
      </div>
    </div>
  );
}

export default MovieDetails;
