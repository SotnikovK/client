// reducers/filterReducer.js

import { SET_SORT_FILTER } from "../actions/filter";

const initialState = {
  sortBy: "", // Initial state for sorting
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_FILTER:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
