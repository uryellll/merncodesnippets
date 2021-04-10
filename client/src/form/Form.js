import React, { useState, useEffect } from "react";
import "./Form.css";
import { useDispatch, connect, useSelector } from "react-redux";
import {
  addNote,
  getNotes,
  saveNewNote,
  updateNote,
} from "../redux/actions/inputActions";

function Form() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const editNote = useSelector((state) => state.NOTES_REDUCER.updatingNote);

  useEffect(() => {
    setIsEditing(true);
    setType(editNote.type);
    setContent(editNote.content);
  }, [editNote]);

  useEffect(() => {
    dispatch(getNotes());
    setIsEditing(false);
  }, []);

  function updateTitle(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  function updateType(e) {
    e.preventDefault();
    setType(e.target.value);
  }

  function updateContent(e) {
    e.preventDefault();
    setContent(e.target.value);
  }

  function handleSubmit(e) {
    if (isEditing === true) {
      e.preventDefault();
      const updatedNote = {
        _id: editNote._id,
        title: editNote.title,
        type: type,
        content: content,
      };
      dispatch(updateNote(updatedNote));
      dispatch(getNotes());
      setTitle("");
      setContent("");
      setIsEditing(false);
    } else {
      e.preventDefault();
      const newNote = {
        title: title,
        type: type,
        content: content,
      };
      setTitle("");
      setContent("");
      dispatch(addNote(newNote));
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <h3>title</h3>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => updateTitle(e)}
          placeholder={isEditing ? "Can't Edit Title" : "Enter title here"}
          disabled={isEditing ? "readonly" : ""}
        />
        <select
          name="languages"
          value={type}
          onChange={(e) => updateType(e)}
          placeholder="Select language type"
        >
          <option value="">Select language type</option>
          <option value="javascript">Javascript</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
        <h3>Insert code</h3>
        <textarea
          name="content"
          value={content}
          cols="40"
          rows="10"
          onChange={(e) => updateContent(e)}
          placeholder="Insert code here"
        >
          {content}
        </textarea>
        <button type="submit" className="submit-btn">
          {isEditing ? "Submit changes" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default connect()(Form);
