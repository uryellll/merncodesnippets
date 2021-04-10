import React from "react";
import "./Filter.css";
import { useDispatch, connect } from "react-redux";
import { setFilter } from "../redux/actions/inputActions";

function Filter() {
  const dispatch = useDispatch();
  return (
    <div className="filter-btn-container">
      <h1>FILTER NOTES:</h1>
      <button
        className="filter-btn"
        value="all"
        onClick={(e) => dispatch(setFilter(e.target.value))}
      >
        ALL
      </button>
      <button
        className="filter-btn"
        value="html"
        onClick={(e) => dispatch(setFilter(e.target.value))}
      >
        HTML
      </button>
      <button
        className="filter-btn"
        value="css"
        onClick={(e) => dispatch(setFilter(e.target.value))}
      >
        CSS
      </button>
      <button
        className="filter-btn"
        value="javascript"
        onClick={(e) => dispatch(setFilter(e.target.value))}
      >
        JAVASCRIPT
      </button>
    </div>
  );
}

export default connect(null, { setFilter })(Filter);
