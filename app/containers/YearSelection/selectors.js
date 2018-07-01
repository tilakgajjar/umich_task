import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the yearSelection state domain
 */

const selectYearSelectionDomain = state =>
  state.get("yearSelection", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by YearSelection
 */

const makeSelectYearSelection = () =>
  createSelector(selectYearSelectionDomain, substate => substate.toJS());

export default makeSelectYearSelection;
export { selectYearSelectionDomain };
