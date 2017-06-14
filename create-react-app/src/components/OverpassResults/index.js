import React from 'react';
import overpassService from '../../services/overpass';

class OverpassResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    overpassService.getOverpassData()
      .then((data) => {
        this.setState({data: JSON.stringify(data)})
      });
  }

  render() {
    return (
      <div className="OverpassResults">
        { this.state.data }
      </div>
    );
  }
}

export default OverpassResults;
