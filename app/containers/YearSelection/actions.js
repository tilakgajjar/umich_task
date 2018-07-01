/*
 *
 * YearSelection actions
 *
 */

import { UPDATE_YEAR } from "./constants";

export function updateYear(value) {
  return {
    type: UPDATE_YEAR,
    value
  };
}

