import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

 class CommentBox extends Component {
	constructor(props) {
		super(props);

		this.state= { comment: ''}
	}
	handleChange(e) {
		this.setState({ comment: e.target.value})
	}
	handleSubmit(e) {
		e.preventDefault();

		this.props.saveComment(this.state.comment);
		this.setState({comment: ''});
	}

	render() {

		return (
			<form onSubmit={this.handleSubmit.bind(this)} className="container text-center comment-box">
          <h4>Add a Comment</h4>
					<textarea value={this.state.comment} onChange={this.handleChange.bind(this)}/>
					<div>
            <button action="submit" className="btn btn-primary">Submit Comment</button>
					</div>
			</form>
		)
	}
}

export default connect(null, actions)(CommentBox);
