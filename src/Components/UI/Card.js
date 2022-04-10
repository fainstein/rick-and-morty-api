import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const classes = props.className
    ? props.className + " " + styles.card
    : styles.card;

  return <div className={`${classes} card`}>{props.children}</div>;
};

export default Card;
