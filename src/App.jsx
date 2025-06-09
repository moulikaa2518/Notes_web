import React, { useState, useEffect } from "react";
import Note from "./Note";
import "./index.css";

function App() {
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (noteText.trim() === "") return;
    setNotes([...notes, noteText]);
    setNoteText("");
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="app-container">
      <h1>📝 Notes App</h1>
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Write your note here..."
      />
      <button onClick={addNote}>Add Note</button>

      <div className="notes-list">
        {notes.map((note, index) => (
          <Note key={index} text={note} onDelete={() => deleteNote(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;