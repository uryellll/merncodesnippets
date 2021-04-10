import { combineReducers } from "redux";
import NOTES_REDUCER from "./notesReducer";
import TYPE_FILTER from "./filterReducer";

export default combineReducers({
  NOTES_REDUCER,
  TYPE_FILTER,
});
