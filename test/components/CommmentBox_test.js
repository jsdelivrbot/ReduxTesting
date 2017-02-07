import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/CommentBox';


describe('CommentBox', ()=> {
  it('should have a textarea', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('textarea')).to.exist;
  });

  it('should have a button', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('button')).to.exist;    
  });
});
