//CommentBox.js
import React, { Component } from 'react';
import API from "../../utils/API";
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import style from './style';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  loadCommentsFromServer = () => {
    API.getComments()
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => console.log(err));
  }

  handleCommentSubmit = (comment) => {

    let comments = this.state.data;
    // comment._id = Date.now();
    let newComments = comments.concat([comment]);
    // console.log("right before 'newComments'")

    // appears as they should...
    // console.log(comment)
    // console.log(newComments)

    this.setState({ data: newComments });

    // console.log(this.state.data)

    API.submitComment(this.props.url, comment)
      .catch(err => {
        console.error(err);
        this.setState({ data: comments });
      });
    // console.log("after submit")
    // console.log(this.state.data)
  }

  // handleCommentDelete = (id) => {
  //   axios.delete(`${this.props.url}/${id}`)
  //     .then(res => {
  //       console.log('Comment deleted');
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }

  // handleCommentUpdate = (id, comment) => {
  //   //sends the comment id and new author/text to our api
  //   axios.put(`${this.props.url}/${id}`, comment)
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }

  render() {
    return (
      <div style={ style.commentBox }>
        <h2>Comments:</h2>
      <CommentList 
        onCommentDelete={ this.handleCommentDelete }
        onCommentUpdate={ this.handleCommentUpdate }
        data={ this.state.data }/>
      <CommentForm onCommentSubmit={ this.handleCommentSubmit }/>
      </div>
    )
  }
}

export default CommentBox;