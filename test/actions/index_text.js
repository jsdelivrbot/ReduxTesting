import {expect} from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe ('Actions', () => {
  describe('saveComment', () => {
    it('should have the correct type', () => {
      const action = saveComment()
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('should have the right payload', () => {
      const action = saveComment('new comment')
      expect(action.payload).to.equal('new comment');
    });

  });
});
