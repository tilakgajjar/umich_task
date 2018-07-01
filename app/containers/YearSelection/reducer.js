/*
 *
 * YearSelection reducer
 *
 */

import { fromJS } from "immutable";
import { UPDATE_YEAR } from "./constants";

export const initialState = fromJS({
  "startYear": "2000",
  "endYear": "2016",
});

function yearSelectionReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_YEAR:
      return state
        .set(Object.keys(action.value)[0], Object.values(action.value)[0]);;
    default:
      return state;
  }
}

export default yearSelectionReducer;
