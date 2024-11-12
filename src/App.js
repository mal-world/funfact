import React from 'react';
import { animals } from './animals';
import './App.css';

const title = "";

function displayFact(e) {
  const animalName = e.target.alt;
  const animalFactsArray = animals[animalName].facts;
  const randomIndex = Math.floor(Math.random() * animalFactsArray.length);
  const funFact = animalFactsArray[randomIndex];

  document.getElementById('fact').innerHTML = funFact;
}

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/ocean1.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <h1>{title || 'Click an animal for a fun fact'}</h1>
      <div className="animal-grid">
        {images}
      </div>
      <p id="fact" className="fact"></p>
    </div>
  );
}

export default App;
