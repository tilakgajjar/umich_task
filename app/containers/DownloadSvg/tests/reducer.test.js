import { fromJS } from 'immutable';
import downloadSvgReducer from '../reducer';

describe('downloadSvgReducer', () => {
  it('returns the initial state', () => {
    expect(downloadSvgReducer(undefined, {})).toEqual(fromJS({}));
  });
});
