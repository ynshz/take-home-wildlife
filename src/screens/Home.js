import React from "react";
import constants from "../constants";
import { useAnimals } from "../contexts/AnimalContext";
import Alert from "../components/Alert";
import FlashCard from "../components/FlashCard";
import "./Home.css";

/**
 * Component for displaying all flashcards.
 * @returns <Home />
 * @todo use Flow or prop-types to typecheck
 */
export default function Home() {
  const { animals, error } = useAnimals();

  return (
    <section className="container">
      <h1>{constants.HOME_PAGE_TITLE}</h1>
      {error && <Alert message={error.message} />}
      <div className="gallery">
        {animals.map((animal, index) => {
          return <FlashCard animal={animal} key={index} />;
        })}
      </div>
    </section>
  );
}
