import { VISIBILITY_FILTERS } from "../filterTypes";

export const getNotesByVisibilityFilter = (notes, visibilityFilter) => {
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.HTML:
      const htmlList = notes.filter((note) => {
        return note.type === "html";
      });
      return htmlList;
    case VISIBILITY_FILTERS.CSS:
      const cssList = notes.filter((note) => {
        return note.type === "css";
      });
      return cssList;
    case VISIBILITY_FILTERS.JAVASCRIPT:
      const jsList = notes.filter((note) => {
        return note.type === "javascript";
      });
      return jsList;
    case VISIBILITY_FILTERS.ALL:
    default:
      return notes;
  }
};
