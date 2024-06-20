import React, { useState } from 'react';

const GameSwipe = ({ flashcards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [remembered, setRemembered] = useState([]);

    const handleSwipe = (remembered) => {
        if (remembered) {
            setRemembered([...remembered, flashcards[currentIndex]]);
        }
        setCurrentIndex(currentIndex + 1);
    };

    return (
        <div>
            {currentIndex < flashcards.length ? (
                <div>
                    <div>{flashcards[currentIndex].question}</div>
                    <button onClick={() => handleSwipe(true)}>Запомнил</button>
                    <button onClick={() => handleSwipe(false)}>Не запомнил</button>
                </div>
            ) : (
                <div>Игра окончена</div>
            )}
        </div>
    );
};

export default GameSwipe;
