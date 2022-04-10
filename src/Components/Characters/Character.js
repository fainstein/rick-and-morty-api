import React from "react";
import styles from "./Character.module.css";

const Character = (props) => {
  return (
    <div className={`${styles.character} card small col col s12 m6 l4`}>
      <div className={`${styles.image} card-image`}>
        <img src={props.image}></img>
        </div>
      <p>{props.name}</p>
      <div className={styles.location}>
        <span className="material-icons-outlined material-icons">
          location_on
        </span>
        <p>{props.location}</p>
      </div>
    </div>
  );
};

export default Character;
