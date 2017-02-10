import {renderComponent, expect} from "../test_helper";
import App from "../../src/components/app";
import CommentList from "../../src/components/CommentList";

// Used to group similar tests
describe('App', () => {
	let app;

	beforeEach(() => {
		app = renderComponent(App);
	})

	it('should render CommentBox', () => {
		expect(app.find('.comment-box')).to.exist
	});

	it('should contain component with comment list', () => {
		expect(app.find('.comment-list')).to.exist
	})
});
