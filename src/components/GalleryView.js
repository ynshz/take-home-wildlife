import React from "react";
import FlashCard from "./FlashCard";
import "./GalleryView.css";

/**
 *
 * @param {Array} animals array of animal objects to be displayed in gallery view
 * @returns <GalleryView />
 */
export default function GalleryView({ animals }) {
  return (
    <div className="gallery">
      {animals.map((animal, index) => {
        return <FlashCard animal={animal} key={index} />;
      })}
    </div>
  );
}
