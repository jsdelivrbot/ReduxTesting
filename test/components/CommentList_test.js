import {renderComponent, expect} from "../test_helper";
import CommentList from "../../src/components/CommentList";

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentList, null, { comments: ['New comment', 'Second comment']});
  });

  it('should show an li for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('should show each comment that is provided', () => {
    expect(component).to.contain('New comment');
    expect(component).to.contain('Second comment');
  });
});
