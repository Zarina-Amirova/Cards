import React, { useState } from 'react';
import FlashcardList from './components/FlashcardList';
import FlashcardForm from './components/FlashcardForm';
import FolderList from './components/FolderList';
import GameSwipe from './components/GameSwipe';
import GameQuiz from './components/GameQuiz';

function App() {
    const [flashcards, setFlashcards] = useState([]);
    const [folders, setFolders] = useState([]);
    const [selectedFolder, setSelectedFolder] = useState(null);

    const addFlashcard = (flashcard) => {
        setFlashcards([...flashcards, { ...flashcard, id: flashcards.length }]);
    };

    const addFolder = (folder) => {
        setFolders([...folders, folder]);
    };

    const selectFolder = (folder) => {
        setSelectedFolder(folder);
        // Load flashcards for the selected folder
    };

    return (
        <div className="container">
            <FolderList folders={folders} selectFolder={selectFolder} addFolder={addFolder} />
            <FlashcardForm addFlashcard={addFlashcard} />
            <FlashcardList flashcards={flashcards} />
            <GameSwipe flashcards={flashcards} />
            <GameQuiz flashcards={flashcards} />
        </div>
    );
}

export default App;
