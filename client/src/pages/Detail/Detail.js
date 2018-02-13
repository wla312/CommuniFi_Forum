import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Hero from "../../components/Hero";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    zip: {}
  };
  // When this component mounts, grab the zip with the _id of this.props.match.params.id
  // e.g. localhost:3000/search/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log("url log test")
    console.log(this.props.match.params.id)
    console.log(this.props.match.params.zipCode)


    API.getOneZip(this.props.match.params.zipCode)
      .then(res => this.setState({ zip: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Hero>
              <h1>
                {this.state.zip.zipCode} 
              </h1>
            </Hero>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <Link to="/">← Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
