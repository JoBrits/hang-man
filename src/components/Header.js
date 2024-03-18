import React from 'react'
import '../App.css';

// Functional react component
const Header = () => {
  return (
    <div className='header-container'>
      <h1>Hangman</h1>
      <p>Find the hidden word - Enter a letter</p>
    </div>
  )
}

export default Header
