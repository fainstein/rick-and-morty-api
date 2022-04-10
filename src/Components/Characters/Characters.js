import React from "react";
import Card from "../UI/Card";
import Character from "./Character";
import styles from "./Characters.module.css";

const Characters = (props) => {
  return (
    <Card className={`container card`}>
      <div className={`row ${styles.charactersContainer}`}>
        {props.charactersList.map((character) => {
          return (
            <Character
              key={character.id}
              name={character.name}
              location={character.location}
              image={character.image}
            ></Character>
          );
        })}
      </div>
    </Card>
  );
};

export default Characters;
