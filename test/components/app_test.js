import {renderComponent, expect} from "../test_helper";
import App from "../../src/components/app";

// Used to group similar tests
describe('App', () => {
	
	// Used to test a single attribute of a target
	it('shows the correct text', () => {

		//create and instance of App
		const component = renderComponent(App);
		// Used to make an assertion about a target
		expect(component).to.contain('React simple starter');

	});

});
