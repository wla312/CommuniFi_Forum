import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
import { Col, Container } from "../Grid";
// import Hero from "../Hero";

class Forum extends Component {
	state = {
		messages: [],
		author: "",
		text: ""
	};

// when the component mounts, load all messages and save them to this.state.messages
	componentDidMount() {
		// finally figured out how to get the zip code from the dynamic buttons into this component
		console.log("inside forum.js")
		const fullzipPath = this.props.urlFromParent;
		console.log(fullzipPath);
		const zipPath = fullzipPath.slice(-5);
		console.log(zipPath)

		// next step, instead of this being a 'find all', we're going to have to do a 'find all where zip='
		// will probably need to add a zip to the schema
		// may also want to add a unique timestamp for each comment in order to sort results
		this.loadMessagesFromServer();

	};

	loadMessagesFromServer = () => {

		API.getComments()
			.then(res => {
				this.setState({ messages: res.data, author: "", text: "" });
			})
			.catch(err => console.log(err));
	};

	// handles updating component state when the user types into the input field
	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	// when the form is submitted, use the API.submitComment method to save the message data
	// then reload messages from the db
	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.author && this.state.text) {
			API.submitComment({
				author: this.state.author,
				text: this.state.text,
			})
			.then(res => this.loadMessagesFromServer())
			.catch(err => console.log(err));
		}
	};

	render() {
		return (
		<Container fluid>
          <Col size="sm-12">
            <h1>Comments:</h1>
            	{this.state.messages.length ? (
	              <List>
	                {this.state.messages.map(message => {
	                  return (
	                    <ListItem key={message._id}>
	                        <h3>{message.author}</h3>
	                        <div>{message.text}</div>
	                    </ListItem>
	                  );
	                })}
	              </List>
	            ) : (
	              <h3>No Results to Display</h3>
	            )}
          </Col>
          <Col size="sm-12">
            <h1>Add a Comment:</h1>
            <form>
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author"
              />
              <TextArea
                value={this.state.text}
                onChange={this.handleInputChange}
                name="text"
                placeholder="Message"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.text)}
                onClick={this.handleFormSubmit}
              >
                Submit Comment
              </FormBtn>
            </form>
          </Col>
      	</Container>
		);
	}
}

export default Forum;

