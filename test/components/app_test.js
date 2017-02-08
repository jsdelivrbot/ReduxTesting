import {renderComponent, expect} from "../test_helper";
import App from "../../src/components/app";

// Used to group similar tests
describe('App', () => {
	let app;

	beforeEach(() => {
		app = renderComponent(App);
	})

	it('should render CommentBox', () => {

		expect(app.find('.comment-box')).to.exist
	})
});
