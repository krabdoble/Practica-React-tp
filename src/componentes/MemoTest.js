import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../estilos/MemoTest.css';

function MemoTest (){
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const cardTypes = ['A', 'B', 'C'];
    const deck = shuffle([...cardTypes, ...cardTypes]);
    setCards(deck.map((type, index) => ({ id: index, type, flipped: false })));
  };

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleClick = (id) => {
    const newCards = [...cards];
    const cardIndex = newCards.findIndex(card => card.id === id);
    if (newCards[cardIndex].flipped || flippedCards.length === 2) return;

    newCards[cardIndex].flipped = true;
    setCards(newCards);
    setFlippedCards([...flippedCards, newCards[cardIndex]]);

    if (flippedCards.length === 1) {
      if (flippedCards[0].type === newCards[cardIndex].type) {
        setMatchedPairs(matchedPairs + 1);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          newCards[cardIndex].flipped = false;
          const firstCardIndex = newCards.findIndex(card => card.id === flippedCards[0].id);
          newCards[firstCardIndex].flipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <>
    <h2>Juego MemoTest</h2>
    <div className="board">
      {cards.map(card => (
        <Card key={card.id} {...card} handleClick={handleClick} />
      ))}
      {matchedPairs === cards.length / 2 && <p>¡Has ganado!</p>}
    </div>
    </>
  );
};

export default MemoTest;