import React, { useEffect } from "react";
import { checkWin } from "../helpers/helpers";

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  // check game state
  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Congratulations you have won!";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "You are dead";
    finalMessageRevealWord = `the word was: ${selectedWord}`;
    playable = false;
  }

  // set state of game
  useEffect(() => setPlayable(playable));

  return (
    <div className="popup-container" style={
        finalMessage !== '' ? {display:'flex'} : {}  
        }>
      {/* Container for final message  */}
      <div className="popup">
        {/* finalMessage */}
        <h2>{finalMessage}</h2>
        {/* finalMessageRevealWord if status lose*/}
        <h3>{finalMessageRevealWord}</h3>
        {/* restart game */}
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
