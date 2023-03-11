import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GiChainedHeart } from "react-icons/gi";

export const Photo = ({ url, name, date, tags }) => {
  const photoDate = new Date(date);
  const addToFav = () => {
    console.log("Add to favorites");
  }

  const deletePhoto = () => {
    console.log("Photo deleted");
  }

  return (
    <div>
      <img src={url} alt={name} />
      <p>{name}</p>
      <p>{photoDate.getFullYear()}</p>
      <div>
        <button onClick={deletePhoto}>
          <RiDeleteBin5Fill />
        </button>
        <button onClick={addToFav}>
          <GiChainedHeart />
        </button>
      </div>
      <ul>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </ul>
    </div>
  );
};
