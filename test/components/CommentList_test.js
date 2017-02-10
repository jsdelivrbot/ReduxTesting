import {renderComponent, expect} from "../test_helper";
import CommentList from "../../src/components/CommentList";

describe('CommentList', () => {
  let component

  beforeEach(() => {
    component = renderComponent(CommentList);
  })

  it('should render comment list', () => {
    expect(component).to.have.class('comment-list');
  })
})
