import { createSelector } from "reselect";
import { initialState } from "./reducer";
import _ from 'lodash';
/**
 * Direct selector to the downloadSvg state domain
 */

const selectDownloadSvgDomain = state => state.get("downloadSvg", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DownloadSvg
 */

const makeSelectDownloadSvg = (id) =>
  createSelector(selectDownloadSvgDomain, (substate) => {
    if (substate) {
      const keys = Object.keys(substate.toJS());
      const bool = (_.includes(keys, id));
      if (bool) {
        return substate.get(id);
      }
    } return false;
  });



export default makeSelectDownloadSvg;
export { selectDownloadSvgDomain };
