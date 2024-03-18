import React, { useState, useEffect } from "react";
import "./App.css";
// Components
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import Help from "./components/Help";
// Helper function
import { showNotification as show } from "./helpers/helpers";

// Temp Data for game to use
const words = ["application", "programming", "interface", "wizard"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  // State management
  // Keep track of playable game
  const [playable, setPlayable] = useState(true);
  // Keep track of correct letters
  const [correctLetters, setCorrectLetters] = useState([]);
  // Keep track of wrong letters
  const [wrongLetters, setWrongLetters] = useState([]);
  // Keep track of Notification popup
  const [showNotification, setShowNotification] = useState(false);

  // useEffect Functions
  useEffect(() => {
    // find what key was pressed
    const handleKeyDown = (event) => {
      const { key, keyCode } = event;

      //  checks letter keys on the keyboard
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            // create new array, spread all current letter and add new letter
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            // call helper function show with showNotification();
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            // create new array, spread all wrong letter and add new letter
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            // call helper function show with showNotification();
            show(setShowNotification);
          }
        }
      }
    };

    // Keydown letter press
    window.addEventListener("keydown", handleKeyDown);
    // to prevent function from loading multiple times
    return () => window.removeEventListener("keydown", handleKeyDown);
    // add dependencies to array, any time correctLetters, wrongLetters, playable gets updated the function is called
  }, [correctLetters, wrongLetters, playable]); 

  // Play again function
  function playAgain() {
    setPlayable(true)
    // reset to empty arrays
    setCorrectLetters([])
    setWrongLetters([])
    // set new word
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <div className="main-container"  style={playable !== true ? { background: "crimson" } : {}}>
      {/* Import header component */}
      <Header />
      <div className="game-container" >
        {/* Import game components */}
        {/* Pass in incorrect letters prop */}
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        {/* Pass in selected word and correct letters prop */}
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      {/* Import help component */}
      <Help/>
      {/* Import popup component that assigns the state of play */}
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </div>
  );
}

export default App;
