import React, { Component } from "react";
// import CommentBox from '../../components/CommentBox/CommentBox.js'
import Forum from "../../components/Forum"

const Message = props => 
	<div>
		<Forum urlFromParent={`${props.match.url}`} />
		{/*<CommentBox 
		url='http://localhost:3001/api/comments'
		pollInterval={2000} />*/}
	</div>


export default Message;