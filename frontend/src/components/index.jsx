import React, { useEffect, useState } from "react";
import Movie from "./movie";

const Main = () => {
  const [moviesData, setMoviesData] = useState();

  useEffect(() => {
    fetch("DB_SERVER")
      .then((response) => response.json())
      .then((response) => setMoviesData(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="main">
        {moviesData &&
          moviesData
            .filter((_, index) => index < 4)
            .map((item) => (
              <Movie
                key={item.id}
                movieName={item.original_title}
                movieYear={item.release_date}
                posterURL={item.poster_path}
              />
            ))}
      </div>
    </>
  );
};
export default Main;
