import React, { useState } from "react";
import styles from "./App.module.css";
import Button from "./Components/UI/Button";
import Characters from "./Components/Characters/Characters";
import Card from "./Components/UI/Card";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchCharactersHandler() {
    setIsLoading(true);
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    const transformedCharacters = data.results.map((characterData) => {
      return {
        id: characterData.id,
        name: characterData.name,
        location: characterData.location.name,
        image: characterData.image,
      };
    });
    setIsLoading(false);
    setCharacters(transformedCharacters);
  }

  return (
    <div className={styles.app}>
      <Card className="container">
        <Button onClick={fetchCharactersHandler}>Fetch Characters</Button>
      </Card>
      {!isLoading && characters.length > 0 && (
        <Characters charactersList={characters}></Characters>
      )}
      {!isLoading && characters.length === 0 && <p>No characters found.</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default App;
