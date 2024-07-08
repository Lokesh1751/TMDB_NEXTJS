"use client";
import React, { useState, useEffect } from "react";
import StarCard from "../Card/StarCard";
import Link from "next/link";

function Crew({ movieid, movie }) {
  const [starcast, setstarcast] = useState(null);

  const apiKey = "5e5f8751bb26571c68636e877ecc857f";

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        let url = `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch movie");
        }
        const data = await response.json();
        // Filter out cast members without a profile path
        const filteredStarcast = data.crew.filter(
          (item) => item.profile_path !== null && item.character !== null
        );
        setstarcast(filteredStarcast);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [apiKey, movieid]);

  return (
    <div className="w-full">
      <h1 className="p-4 text-2xl">Top Billed Crew</h1>
      <div className="flex  p-4  overflow-x-auto gap-2 cursor-pointer">
        {starcast &&
          starcast.map((item, index) => (
            <div key={index} className="shadow-lg rounded-md">
              <Link href={`/Biography/${item.id}`}>
                <StarCard
                  name={item.original_name}
                  character={item.department}
                  imageUrl={item.profile_path}
                />
              </Link>
            </div>
          ))}
      </div>
      <p className="text-[17px] p-4 font-medium">Full Cast & Crew</p>
      <hr className="w-[75%]" />
    </div>
  );
}

export default Crew;
