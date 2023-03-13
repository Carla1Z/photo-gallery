import React, { useEffect, useState } from "react";
import { Photo } from "../Photo";
import styles from "./styles.module.css";

export const ListOfPhotos = () => {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then((respose) => respose.json())
      .then((data) => {
        setImgs(data.resources);
        console.log(data);
      });
  }, []);

  return (
    <ul className={styles.list}>
      {imgs.length > 0 ? (
        imgs.map((img) => (
          <Photo
            name={img.name}
            date={img.created_at}
            url={img.url}
            tags={["dogs", "cat", "buildings"]}
            key={img.asset_id}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </ul>
  );
};
