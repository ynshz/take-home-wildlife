import React, { useEffect, useRef } from "react";
import "./FlashCard.css";

/**
 * Component for displaying a flashcard view of an animal.
 * @param {Object} animal
 * @returns <FlashCard animal = {animal} />
 * @todo use Flow or prop-types to typecheck
 */
export default function FlashCard({ animal, currentAnimal }) {
  const descriptionRef = useRef();
  const {
    name,
    class: animalClass,
    order,
    family,
    genus,
    species,
    image,
    credit,
  } = animal;

  useEffect(() => {
    descriptionRef.current.classList.remove("is-open");
  }, [currentAnimal]);

  const handleClickFlashCard = () => {
    descriptionRef.current.classList.toggle("is-open");
  };

  // Make sure the animal Object at least has a name attribute
  return name ? (
    <div className="flashcard-container">
      <div className="flashcard" onClick={handleClickFlashCard}>
        <div className="image-container">
          <section ref={descriptionRef} className="description">
            <div className="description-content">
              <h2>{name}</h2>
              <dl>
                <dt>Class</dt>
                <dd>{animalClass}</dd>
                <dt>Order</dt>
                <dd>{order}</dd>
                <dt>Family</dt>
                <dd>{family}</dd>
                <dt>Genus</dt>
                <dd>{genus}</dd>
                <dt>Species</dt>
                <dd>{species}</dd>
              </dl>
            </div>
          </section>

          <img src={image} alt={image} className="animal-image" width="100%" />
        </div>

        <div className="attribution">{`Credit: ${credit}`}</div>
      </div>
    </div>
  ) : null;
}
