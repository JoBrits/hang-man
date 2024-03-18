import React, { useState } from "react";

const Help = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className="help-button"
        onClick={() => setOpen(true)}
      >
        Help
      </button>
      <div
        className="popup-container"
        style={open === true ? { display: "flex" } : {}}
      >
        <div className="popup">
          {/* Source : https://www.printactivities.com/Paper-Games/Rules-For-Hangman.shtml */}
          <h2>Help</h2>
          <h3>
            Hangman is a classic paper and pencil game. The idea of the gallows
            may be a little morbid, but it also adds to the excitement of the
            game, especially for boys. Everyone wants to save the poor person
            from a grim fate!
          </h3>
          <p>
            The program is the executioner and will think of a word and mark out
            blanks (short lines) for each letter of the word. Then the player
            will guess a letter. If that letter is in the word then the program
            will insert the letter everywhere it would appear. If the letter
            isn't in the word then the program will add a body part to the
            gallows
          </p>
          <p>
            The player will continue guessing letters until they can either
            solve the word or all six body parts are on the gallows. A popup will also indicate if a letter has previously been pressed
          </p>
          <button onClick={() => closeModal()}>Close</button>
        </div>
      </div>
    </>
  );
};

export default Help;
