import React from "react";

const Note = ({ text, onDelete }) => {
  return (
    <div className="note">
      {text}
      <button className="delete-btn" onClick={onDelete}>X</button>
    </div>
  );
};

export default Note;