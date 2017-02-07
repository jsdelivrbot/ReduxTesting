import React, { Component } from 'react';

export default class CommentBox extends Component {
	render() {
		return (
			<div className="container text-center">
				<div>
					<textarea/>
					<br/>
					<button className="btn btn-primary">Submit Comment</button>
				</div>
			</div>
		)
	}
}
