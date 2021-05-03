import React from "react";
import Home from "./screens/Home";
import { AnimalProvider } from "./contexts/AnimalContext";

export default function App() {
  return (
    <AnimalProvider>
      <Home />
    </AnimalProvider>
  );
}
