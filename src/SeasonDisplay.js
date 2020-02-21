import React from 'react';

class SeasonDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null, //set to null if value is number
      errorMessage: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude:{this.state.lat}</div>;
    }
    return <div>Loading!</div>;
  }
}

export default SeasonDisplay;
