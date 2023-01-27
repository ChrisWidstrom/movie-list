import React from "react";
import Movie from "../ts/types/types";
import SidebarSearchField from "./SidebarSearchField";
import SidebarSearchItem from "./SidebarSearchItem";

const Sidebar = ({
  movieList,
  setQuery,
  setMovieId,
}: {
  movieList: Movie[];
  setQuery: Function;
  setMovieId: Function;
}) => {
  return (
    <div className="searchPane">
      <SidebarSearchField setQuery={setQuery} />
      {movieList.map((movie: Movie) => {
        return (
          <SidebarSearchItem
            title={movie.title}
            id={movie.id}
            setMovieId={setMovieId}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
