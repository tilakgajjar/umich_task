import { fromJS } from 'immutable';
import yearSelectionReducer from '../reducer';

describe('yearSelectionReducer', () => {
  it('returns the initial state', () => {
    expect(yearSelectionReducer(undefined, {})).toEqual(fromJS({}));
  });
});
