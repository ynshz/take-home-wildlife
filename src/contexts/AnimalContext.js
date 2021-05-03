import React, { useContext, useState, useEffect } from "react";
import Loader from "../components/Loader";
import constants from "../constants";
import utils from "../utils";

const AnimalContext = React.createContext();

/**
 * Custom hook for using resources related to animals
 * @returns {Object} The AnimalContext object containing the value passed by the provider
 */
export function useAnimals() {
  return useContext(AnimalContext);
}

/**
 * @param {Object} children React children elements under this provider
 * @returns The Provider component <AnimalContext.Provider value={value}>
 */
export function AnimalProvider({ children }) {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(async () => {
    setLoading(true);
    getAnimals(constants.ANIMALS_URL)
      .then((result) => {
        setAnimals(removeInvalidAnimals(result));
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  /**
   * Removes invalid value in animals array
   * @param {Array} animals original array of animals
   * @returns {Array} new array of animals after invalid values have been removed
   */
  const removeInvalidAnimals = (animals) => {
    let result = [];
    animals.forEach((animal) => {
      if (animal.name !== undefined) {
        result.push(animal);
      }
    });
    return result;
  };

  /**
   * Get animals JSON array from url
   * @param {string} url The url where data is stored
   * @returns {Array} Array of Animal Objects
   */
  const getAnimals = async (url) => {
    if (!utils.isString(url)) throw new Error("Invalid Url");

    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid response from the server");
        } else {
          return response.text();
        }
      })
      .then((text) => {
        return utils.csvToJson(text);
      })
      .catch((error) => {
        throw error;
      });
  };

  // Value to be passed to the provider
  const value = { animals, error };

  return (
    <AnimalContext.Provider value={value}>
      {loading ? <Loader tip="Loading Animals" /> : children}
    </AnimalContext.Provider>
  );
}
