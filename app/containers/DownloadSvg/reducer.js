/*
 *
 * DownloadSvg reducer
 *
 */

import { fromJS } from "immutable";
import { DOWNLOAD_PLOT } from "./constants";

export const initialState = fromJS({});

function downloadSvgReducer(state = initialState, action) {
  switch (action.type) {
    case DOWNLOAD_PLOT:
      return state
        .set(action.plotId, action.download);
    default:
      return state;
  }
}

export default downloadSvgReducer;
