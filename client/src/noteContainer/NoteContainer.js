import React, { useEffect } from "react";
import "./NoteContainer.css";
import NoteItem from "./noteItem/NoteItem";
import { useSelector, useDispatch } from "react-redux";
import { getNotesByVisibilityFilter } from "../redux/actions/filterActions";
import { getNotes } from "../redux/actions/inputActions";

function NoteContainer() {
  const notesList = useSelector((state) => state.NOTES_REDUCER.notes);
  const filter = useSelector((state) => state.TYPE_FILTER);
  const notes = getNotesByVisibilityFilter(notesList, filter);

  if (notes.length === 0) {
    return (
      <div className="empty-notes">
        <p>There is no snippet yet. Please add one.</p>
      </div>
    );
  }

  return (
    <div className="note-container">
      {notes.map((item) => {
        return <NoteItem key={item._id} item={item} />;
      })}
    </div>
  );
}

export default NoteContainer;
