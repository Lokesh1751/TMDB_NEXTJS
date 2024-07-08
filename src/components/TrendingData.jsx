import React from "react";
import Card from "../Card/Card";
import Link from "next/link";

function TrendingData({ movies }) {
  return (
    <div className="flex w-full overflow-x-auto gap-2 cursor-pointer  ">
      {movies.map((item, index) => {
        return (
          <div>
            {" "}
            <Link href={`/Details/${item.id}`}>
              <Card
                key={index}
                name={item.title}
                date={item.release_date}
                imageUrl={item.poster_path}
                vote={item.vote_average}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default TrendingData;
