import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
// import Navbar from "../../components/Navbar";
// import Alert from "../../components/Alert";
// import { Input, FormBtn } from "../../components/Form";
import { Link } from "react-router-dom";
import SearchForm from "../../components/SearchForm";

class Search extends Component {
  state = {
    search: "",
    zips: [],
    // results: [],
    error: ""
  };

  // When the component mounts... 
  componentDidMount() {
    console.log("happens before page loads", API)

    // function to get all zip codes (this was the first thing I tested with dummy data)
    // gets a list of all available zip codes and updates this.state.zips
    this.loadZips();
  }

  loadZips = () => {

    API.getZips()
      .then((res) => {
        console.log('all our zip codes', res)
        this.setState({zips: res.data})
    })
      .catch(err => console.log(err));
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getOneZip(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ zips: res.data, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    // shows dynamically changing 'state' value of input(s)
    console.log('state', this.state);

    return (
      <Container fluid>
      {/*<Navbar location={'search'} />*/}
        <div className="jumbotron col-sm-12">
          <Col size="sm-12">
            <Col size="md-5"/>
              <Col size="md-2">
                <SearchForm
                  handleFormSubmit={this.handleFormSubmit}
                  handleInputChange={this.handleInputChange}
                  zips={this.state.zips}
                />
              </Col>
            <Col size="md-5"/>
          </Col>
        </div>

        <Row>
          <Col size="sm-12">
            <Col size="md-4"/>
              <Col size="md-4">
                {this.state.zips.length ? (
                  <List>
                    {this.state.zips.map(zip => (

                      <ListItem key={zip.zipCode}>
                        <strong>
                          {zip.zipCode} {zip.hasCommunityISP ? ("has a") : ("does not have a")} community ISP initiative
                        </strong>
                        {/*<a href={"/search/" + zip.zipCode}>*/}
                        <Link to={"/messageBoard/" + zip.zipCode }>
                          <strong>
                            <button>
                              {zip.hasCommunityISP ? ("Join") : ("Create")}
                            </button>
                          </strong>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>Zip Code Not Found</h3>
                )}
              </Col>
            <Col size="md-4"/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;

