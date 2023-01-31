import React from "react";
import Movie from "../ts/types/types";
import MyListItem from "./MyListItem";

const MyListViewMyList = ({
  myList,
  setMovie,
  removeMovieFromList
}: {
  myList: Movie[],
  setMovie: Function,
  removeMovieFromList: Function
}) => {
  return (
    <>
      <h1 className="myListHeader">My list</h1>
      <ul className="myList">
        {myList.map((movie) => {
          return (
            <MyListItem
              movie={movie}
              setMovie={setMovie}
              removeMovieFromList={removeMovieFromList}
            />
          );
        })}
      </ul>
    </>
  );
};

export default MyListViewMyList;
