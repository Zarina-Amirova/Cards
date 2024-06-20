import React, { useState } from 'react';

const GameQuiz = ({ flashcards }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleAnswer = (answer) => {
        if (answer === flashcards[currentQuestion].answer) {
            setScore(score + 1);
        }
        setSelectedAnswer(answer);
        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        <div>
            {currentQuestion < flashcards.length ? (
                <div>
                    <div>{flashcards[currentQuestion].question}</div>
                    <div>
                        {flashcards.map((card, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(card.answer)}
                            >
                                {card.answer}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    Игра окончена, ваш счет: {score}
                </div>
            )}
        </div>
    );
};

export default GameQuiz;
