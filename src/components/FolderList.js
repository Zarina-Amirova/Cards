import React, { useState } from 'react';

const FolderList = ({ folders, selectFolder, addFolder }) => {
    const [newFolder, setNewFolder] = useState('');

    const handleAddFolder = () => {
        if (newFolder) {
            addFolder(newFolder);
            setNewFolder('');
        }
    };

    return (
        <div>
            <ul>
                {folders.map((folder, index) => (
                    <li key={index} onClick={() => selectFolder(folder)}>
                        {folder}
                    </li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Название папки"
                value={newFolder}
                onChange={(e) => setNewFolder(e.target.value)}
            />
            <button onClick={handleAddFolder}>Добавить папку</button>
        </div>
    );
};

export default FolderList;
