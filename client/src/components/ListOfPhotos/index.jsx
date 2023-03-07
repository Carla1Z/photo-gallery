import React from "react";
import { Photo } from "../Photo";

export const ListOfPhotos = ({ pictures }) => {
  return (
    <ul>
      {pictures.map((pic) => (
        <Photo {...pic} tags={["dogs", "cat", "buildings"]} />
      ))}
    </ul>
  );
};
