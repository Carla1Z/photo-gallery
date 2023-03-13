import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GiChainedHeart } from "react-icons/gi";
import styles from "./styles.module.css";

export const Photo = ({ url, name, date, tags }) => {
  const photoDate = new Date(date);
  const addToFav = () => {
    console.log("Add to favorites");
  };

  const deletePhoto = () => {
    console.log("Photo deleted");
  };

  return (
    <div className={styles.photo}>
      <p className={styles.title}>Titulo {name}</p>
      <p className={styles.date}>{photoDate.getFullYear()}</p>
      <img src={url} alt={name} className={styles.image} />
      <div className={styles.buttons}>
        <button onClick={addToFav} className={styles.favorite}>
          <GiChainedHeart />
        </button>
        <button onClick={deletePhoto} className={styles.delete}>
          <RiDeleteBin5Fill />
        </button>
      </div>
      {/* <ul>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </ul> */}
    </div>
  );
};
