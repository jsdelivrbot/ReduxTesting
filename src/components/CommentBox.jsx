import React, { Component } from 'react';

export default class CommentBox extends Component {
	constructor(props) {
		super(props);

		this.state= { comment: ''}
	}
	handleChange(e) {
		this.setState({ comment: e.target.value})
	}
	handleSubmit(e) {
		e.preventDefault();
		this.setState({comment: ''});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)} className="container text-center comment-box">
					<textarea value={this.state.comment} onChange={this.handleChange.bind(this)}/>
					<br/>
					<button action="submit" className="btn btn-primary">Submit Comment</button>
			</form>
		)
	}
}
