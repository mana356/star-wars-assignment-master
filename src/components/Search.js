import React from "react";
import { connect } from "react-redux";

import PlanetList from "./PlanetList";
import { getPlanet } from "../actions/planetAction";

class Search extends React.Component {
  state = { query: "" };
  constructor() {
    super();
    this.state = {
      res: [{
        "name": "Tatooine", 
        "population": "200000"
      },
      {
        "name": "Alderaan", 
        "population": "2000000000", 
    
      },
      {
        "name": "Yavin IV", 
        "population": "1000", 
    
      }]}
  }
  
  handleInputChange = event => {
    this.setState({
      query: event.target.value
    });
    var result = this.props.getPlanet(event.target.value);
    //console.log(result);
  };

  render() {
    console.log(this.state.res)
    return (
      <React.Fragment>
        <div className="search-bar ui segment">
          <form className="ui form">
            <div className="field">
              <label>Planet Search</label>
              <input
                placeholder="Search for..."
                value={this.state.query}
                onChange={this.handleInputChange}
              />
            </div>
          </form>
        </div>

        <PlanetList planets={this.state.res}></PlanetList>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {};
};
export default connect(
  mapStateToProps,
  { getPlanet }
)(Search);
