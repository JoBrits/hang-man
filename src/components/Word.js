import React from "react";

// Pass in selected word (Destructured)
function Word({ selectedWord, correctLetters }) {
  return (
    <div className="word">
      {/* breaks word into letters */}
      {selectedWord.split("").map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {/* conditional to check if letter is correct from  correctLetters array*/}
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
}

export default Word;
