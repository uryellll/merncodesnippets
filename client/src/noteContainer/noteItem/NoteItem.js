import React from "react";
import "./NoteItem.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useDispatch, connect } from "react-redux";
import { editNote, deleteNote } from "../../redux/actions/inputActions";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function NoteItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <div className="header-container">
        <div className="header-text">
          <h3>{item.title}</h3>
          <h4>{item.type}</h4>
        </div>
        <div className="header-btn">
          <button onClick={() => dispatch(editNote(item))}>
            <AiFillEdit />
          </button>
          <button onClick={() => dispatch(deleteNote(item))}>
            <AiFillDelete />
          </button>
        </div>
      </div>
      <SyntaxHighlighter
        language={item.type}
        style={dracula}
        showLineNumbers="true"
        wrapLongLines="true"
      >
        {item.content}
      </SyntaxHighlighter>
    </div>
  );
}

export default connect()(NoteItem);
