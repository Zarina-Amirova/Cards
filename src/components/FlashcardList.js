import React from 'react';
import Flashcard from 'd:/flash_cards/src/components/FlashCard.js';

const FlashcardList = ({ flashcards }) => {
    return (
        <div className="card-grid">
            {flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id} />;
            })}
        </div>
    );
};

export default FlashcardList;
