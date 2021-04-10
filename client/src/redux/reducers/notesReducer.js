import * as actionTypes from "../actionTypes";

const initialState = {
  notes: [],
  updatingNote: {},
};

function NOTES_REDUCER(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      const newNote = action.payload;
      return { ...state, notes: [...state.notes, newNote] };
    case actionTypes.SET_NOTES:
      return { ...state, notes: action.payload };
    case actionTypes.EDIT_NOTE:
      return { ...state, updatingNote: action.payload };
    case actionTypes.UPDATE_NOTE:
      const note = state.notes.find((item) => item._id === action.payload._id);
      return {
        ...state,
        note: {
          ...note,
          content: action.payload.content,
          type: action.payload.type,
        },
      };
    case actionTypes.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((item) => item._id !== action.payload),
      };

    default:
      return state;
  }
}

export default NOTES_REDUCER;
