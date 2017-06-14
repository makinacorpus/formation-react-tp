import React from 'react';
import nominatimService from '../../services/nominatim';

class NominatimResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: 'Toulouse'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    this.getNominatimData(this.state.value);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.getNominatimData(this.state.value);
  }
  getNominatimData(search) {
    nominatimService.getNominatimData(search)
      .then((data) => this.setState({data: data}));
  }
  render() {
    return (
      <div className="NominatimResults">
        <form>
          <label htmlFor="search">Search</label>
          <input type="text" id="search" onChange={this.handleChange} value={this.state.value}/>
          <input type="submit" onClick={this.handleSubmit} value="Search"/>
        </form>
        <ul>
          {
            this.state.data.map((currentResult, index) => (
              <li key={index}>
                {currentResult.display_name} ({currentResult.lat}, {currentResult.lon})
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default NominatimResults;
