import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('commentsReducer', () => {
  it('should handle action wtih unknown type', () => {
    expect(commentReducer(undefined, {})).to.eql([]);
  });
  
  it('SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment'};
    expect(commentReducer([], action)).to.eql(['new comment']);
  })
});
