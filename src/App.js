import React, { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
    { "src": "/img/Clown face 256.png", matched: false},
    { "src": "/img/Cowboy hat face 256.png", matched: false},
    { "src": "/img/Nerd face 256.png", matched: false},
    { "src": "/img/Partying face 256.png", matched: false},
    { "src": "/img/Pile of poo 256.png", matched: false},
    { "src": "/img/Exploding head 256.png", matched: false}
]

function App() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)

    // shuffle cards
    const shuffleCards = () => {
        const shuffledCards=[...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5) 
            .map((card) => ({...card, id: Math.random() }))

        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        setTurns(0)
    }

    // handle a choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    // compare 2 selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)

            if (choiceOne.src === choiceTwo.src){
                setCards(prevCards  => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src){
                            return{...card, matched: true}
                        } else{
                            return card
                        }
                    })
                })
                resetTurn()
            } else{
                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [choiceOne, choiceTwo])

    // reset choices & increase turn
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns +1)
        setDisabled(false)
    }

    //start new game automagically
    useEffect(()  => {
        shuffleCards()
    }, [])

    return (
        <div className= 'App'>
            <h1>Magic Match</h1>
            <button onClick={shuffleCards}>New Game</button>

            <div className='card-grid'>
                {cards.map(card => (
                    <SingleCard 
                    key={card.id} 
                    card={card}
                    handleChoice={handleChoice}
                    flipped={card === choiceOne || card === choiceTwo || card.matched}
                    disabled={disabled}
                    />
                ))}
            </div>
            <p>
                Turns: {turns}
            </p>
        </div>
    );
}

export default App;
