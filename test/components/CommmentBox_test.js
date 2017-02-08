import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('CommentBox', ()=> {
  let component;

  beforeEach(() => {
      component = renderComponent(CommentBox);

  });

  it('should have the class comment-box', () => {
    expect(component).to.have.class('comment-box');
  });

  it('should have a textarea', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('should have a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('text box operation', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('should show enetered text', () => {
      expect(component.find('textarea')).to.have.value('new comment')
    });

    it('should clear input when submitted', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
