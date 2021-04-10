import React from "react";
import "./App.css";
import Filter from "./filters/Filter";
import Form from "./form/Form";
import NoteContainer from "./noteContainer/NoteContainer";

const App = () => {
  return (
    <div className="main-container">
      <div className="main-header-container">
        <h1>CODE SNIPPETS</h1>
      </div>
      <div className="main-form-container">
        <Form />
        <Filter />
      </div>
      <div className="main-notes-container">
        <NoteContainer />
      </div>
    </div>
  );
};

export default App;
