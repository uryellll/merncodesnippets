import * as actionTypes from "../actionTypes";
import axios from "axios";

export const addNote = (note) => (dispatch, getState) => (
  axios({
    url: "https://merncodesnippets.herokuapp.com/api/save",
    method: "POST",
    data: note,
  })
    .then(() => {
      console.log("Data has been sent.");
    })
    .catch(() => {
      console.log("Error sending data to the server.");
    }),
  dispatch({
    type: actionTypes.ADD_NOTE,
    payload: {
      title: note.title,
      type: note.type,
      content: note.content,
    },
  })
);

export const deleteNote = (note) => (dispatch, getState) => (
  axios({
    url: "https://merncodesnippets.herokuapp.com/api/id",
    method: "DELETE",
    data: note,
  })
    .then(() => {
      console.log("Data has been sent.");
    })
    .catch(() => {
      console.log("Error sending data to the server.");
    }),
  dispatch({
    type: actionTypes.DELETE_NOTE,
    payload: note._id,
  })
);

export const editNote = (note) => ({
  type: actionTypes.EDIT_NOTE,
  payload: {
    _id: note._id,
    title: note.title,
    type: note.type,
    content: note.content,
  },
});

export const updateNote = (updatedNote) => (dispatch, getState) => (
  axios({
    url: `https://merncodesnippets.herokuapp.com/api/id`,
    method: "POST",
    data: updatedNote,
  })
    .then(() => {
      console.log("Data has been sent.");
    })
    .catch(() => {
      console.log("Error sending data to the server.");
    }),
  dispatch({
    type: actionTypes.UPDATE_NOTE,
    payload: {
      _id: updatedNote._id,
      type: updatedNote.type,
      content: updatedNote.content,
    },
  })
);

export const setNotes = (notes) => ({
  type: actionTypes.SET_NOTES,
  payload: notes,
});

export const setFilter = (filter) => ({
  type: actionTypes.SET_FILTER,
  payload: { filter },
});

export const getNotes = () => (dispatch, getState) => {
  axios("https://merncodesnippets.herokuapp.com/api")
    .then((response) => {
      const notes = response.data;
      dispatch(setNotes(notes));
    })
    .catch(() => {
      console.log("Cannot retrieved data.");
    });
};
