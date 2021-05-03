import React, { useState } from "react";
import constants from "../constants";
import { useAnimals } from "../contexts/AnimalContext";
import Alert from "../components/Alert";
import FlashCard from "../components/FlashCard";
import "./Home.css";
import ToolBar from "../components/ToolBar";
import GalleryView from "../components/GalleryView";
import SlideView from "../components/SlideView";

/**
 * Component for displaying all flashcards.
 * @returns <Home />
 * @todo use Flow or prop-types to typecheck
 */
export default function Home() {
  const { animals, error } = useAnimals();

  const [slideView, setSlideView] = useState(false);

  const toggleSlideView = (bool) => {
    setSlideView(bool);
  };
  return (
    <section className="container">
      {error && <Alert message={error.message} />}
      <h1>{constants.HOME_PAGE_TITLE}</h1>
      <ToolBar toggleSlideView={toggleSlideView} />

      {slideView ? (
        <SlideView animals={animals} />
      ) : (
        <GalleryView animals={animals} />
      )}
    </section>
  );
}
