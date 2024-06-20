import React, { useState } from 'react';

const FlashcardForm = ({ addFlashcard }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addFlashcard({ question, answer });
        setQuestion('');
        setAnswer('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Вопрос"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            <input
                type="text"
                placeholder="Ответ"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
            />
            <button type="submit">Добавить карточку</button>
        </form>
    );
};

export default FlashcardForm;
