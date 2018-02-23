import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
import { Col, Container } from "../Grid";
import "./Forum.css";
// import Hero from "../Hero";

class Forum extends Component {
	state = {
		messages: [],
		author: "",
		text: "",
		zip: ""
	};

// when the component mounts, load all messages and save them to this.state.messages
	componentDidMount() {
		// console.log(this.props.zipcode);
		// finally figured out how to get the zip code from the dynamic buttons into this component
		console.log("inside forum.js")
		console.log(this.props.zipcode)
		// const fullzipPath = this.props.urlFromParent;
		// // console.log(fullzipPath);
		// const zipPath = fullzipPath.slice(-5);
		// console.log(zipPath)
		// this.setState({ zip: zipPath });

		this.setState({zip: this.props.zipcode}, function () {
    	console.log(this.state.zip);
		});

		// why isn't state changing?
		// console.log(this.state.zip);
		// console.log(this.state)

		// next step, instead of this being a 'find all', we're going to have to do a 'find all where zip='
		// will probably need to add a zip to the schema
		// may also want to add a unique timestamp for each comment in order to sort results
		this.loadMessagesFromServer();

	};
	// componentDidUpdate(){
	// 	// this.loadMessagesFromServer();
	// 	// this.toggleISP();
	// }

	// loadMessagesFromServer = () => {

	// 	API.getComments()
	// 		.then(res => {
	// 			this.setState({ messages: res.data, author: "", text: "" });
	// 		})
	// 		.catch(err => console.log(err));
	// };
	loadMessagesFromServer = () => {
		// console.log("inside loadMessagesFromServer")
		// // this still returns and empty string...
		console.log(this.props.zipcode);
		// console.log(this.state.zip);

		API.getCommentsByZip(this.props.zipcode)
			.then(res => {
				this.setState({ messages: res.data, error: "" });
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

	toggleISP = () => {
		API.updateOneZip(this.state.zip)
			.then(console.log("toggled boolean"))
			.catch(err => console.log(err));
	};

	// when the form is submitted, use the API.submitComment method to save the message data
	// then reload messages from the db
	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.author && this.state.text && this.state.zip) {
			API.submitComment({
				author: this.state.author,
				text: this.state.text,
				zip: this.props.zipcode
			})
			.then(res => this.loadMessagesFromServer(this.props.zipcode))
			.then(res => this.toggleISP(this.props.zipcode))
			.catch(err => console.log(err));
		}
		// 
	};

	render() {
		return (
		<Container fluid>
          <Col size="sm-12">
          	<h1 className="text-center">{this.state.zip} Community ISP Group</h1>
          	  {/*<div className="fb-share-button" 
			    data-href="https://arcane-ridge-17845.herokuapp.com/search"
			    data-layout="button"
			    size="large">
			  </div>*/}
			  <div className="text-center addthis_inline_share_toolbox"></div>
	        <Col size="sm-6">
	          <h2>ISPs and Wireless Mesh Networks 101:</h2>
              <h4>Q: What is an 'ISP'?</h4>
              <h4>A: An Internet service provider (ISP) is an organization that provides services accessing and using the Internet.</h4>
              <br/>
              <h4>Q: What is a 'WISP'?</h4>
              <h4>A: A wireless Internet service provider (WISP) is an Internet service provider with a network based on wireless networking.</h4>
              <br/>
              <h4>Q: I don't know a thing about ISPs or network design, how do I know where to begin on my community project?</h4>
              <h4>A: There are many ways to design a community wireless network. Fortunately, many community 
              networks and Wireless Internet Service Providers (WISPs) have done this before. We strongly believe all local
              community-run initiatives should start with something called a 'Wireless Mesh Network'.
              </h4>
              <br/>
              <h4>A great beginner's guide to wireless mesh networks can be found <a href="http://communitytechnology.github.io/docs/cck/networking/intro-to-mesh/" target="_blank" >here</a>.</h4>
              <br/>
              <h4>A great visual guide to local/community mesh network design can be found <a href="http://communitytechnology.github.io/docs/cck/networking/guidelines-for-mesh/" target="_blank" >here</a>.</h4>
              <br/>
              <h4>For more tools, tips, and news, check out our <a href="https://arcane-ridge-17845.herokuapp.com/Resources" target="_blank" >Resources</a> page.</h4>
              <br/>
              <h4 className="text-center">____________________________________________</h4>
              <br/>
              <h4 className="text-center">The first step for any community-run network, is to get the word out to friends and neighbors. Help spread the word and build your community group by sharing your group with people in your community!</h4>
              

	        </Col>
	        <Col size="sm-6">
	            	{this.state.messages.length ? (
		              <List>
		                {this.state.messages.map(message => {
		                  return (
		                    <ListItem key={message._id}>
		                        <h3>{message.author}</h3>
		                        {/*<h3>{message.zip}</h3>*/}
		                        <div>{message.text}</div>
		                    </ListItem>
		                  );
		                })}
		              </List>
		            ) : (
		              <h3>No Results to Display</h3>
		            )}
	            <h1>Join the Conversation:</h1>
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
          </Col>
      	</Container>
		);
	}
}

export default Forum;

