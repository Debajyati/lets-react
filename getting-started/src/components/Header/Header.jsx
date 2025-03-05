import React from "react";

const reactDescriptions = ["Fundamental", "Crucial", "Component-based", "Decalarative", "Core", "Universal"];
import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

function genRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length)];
  return (
    <header>
      <img src={reactImg} alt="React logo" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}


