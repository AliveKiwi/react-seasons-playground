import React from 'react';

class SeasonDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null, //set to null if value is number
      errorMessage: ''
    };

    // console.log('Constructor called 1st');
  }

  componentWillMount() {
    // console.log('Component Will Mount called 2nd ');
  }

  componentDidMount() {
    // console.log('Component Did Mounted called 4th');
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentWillUpdate() {
    // console.log('Component Will Update called 5th ');
  }

  componentDidUpdate() {
    // console.log('Component Did Update called 7th ');
  }

  componentDidCatch() {
    // console.log('Caught Error');
  }

  componentWillUnmount() {
    // console.log('Component Will Unmount called last ');
  }

  render() {
    // console.log('Inisde Render called 3rd');
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
