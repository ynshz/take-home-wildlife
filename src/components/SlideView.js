import React, { useState } from "react";
import Button from "./Button";
import FlashCard from "./FlashCard";
import "./SlideView.css";

/**
 *
 * @param {Array} animals array of animal objects to be displayed in gallery view
 * @returns <SlideView />
 */
export default function SlideView({ animals }) {
  const [currentAnimal, setCurrentAnimal] = useState(0);

  const handleClickPrevious = () => {
    if (currentAnimal === 0) {
      setCurrentAnimal(animals.length - 1);
    } else {
      setCurrentAnimal(currentAnimal - 1);
    }
  };

  const handleClickNext = () => {
    if (currentAnimal === animals.length - 1) {
      setCurrentAnimal(0);
    } else {
      setCurrentAnimal(currentAnimal + 1);
    }
  };
  return (
    <>
      <Button text="Previous" onClick={handleClickPrevious} />
      <Button text="Next" onClick={handleClickNext} />
      <div className="slide">
        <FlashCard
          animal={animals[currentAnimal]}
          currentAnimal={currentAnimal}
        />
      </div>
    </>
  );
}
