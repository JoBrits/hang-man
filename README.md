React Hangman Game by Johan Brits 

Project Overview:

A React app that allows users to play Hangman. The game picks a random word, which the user must then attempt to guess letter-by-letter. Too many incorrect guesses result in loss of the game. Iconically the process of losing is depicted by your character being hanged.


Rules of the game:

* The app will select a word and mark out blanks (short lines) for each letter of the word. 
* Then the player will guess a letter. If that letter is in the word then the app will insert the letter everywhere it would appear. 
* If the letter isn't in the word then the program will add a body part to the gallows.
* The player will continue guessing letters until they can either solve the word or all six body parts are on the gallows. 
* A popup will also indicate if a letter has previously been pressed.


Starting and playing the game:

* Download source from 
* In terminal navigate to the hang-man folder
* Type NPM install to fetch all dependencies
* Type NPM start to start application


React Hangman Game: Project Specifications

* Display hangman pole and figure
* Select a random word from a list of words
* Display word in UI with correct letters
* Display wrong letters
* Show notification when selecting a letter twice
* Show popup on win or lose
* Play again button to reset game
* Help section with Game rules


References:
* https://www.printactivities.com/Paper-Games/Rules-For-Hangman.shtml
* https://github.com/bradtraversy/vanillawebprojects/blob/master/hangman/index.html