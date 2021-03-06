import { SET_FILTER } from "../actionTypes";
import { VISIBILITY_FILTERS } from "../filterTypes";

const initialState = VISIBILITY_FILTERS.ALL;

const TYPE_FILTER = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default TYPE_FILTER;
