import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
class App extends React.Component {
  render() {
    return <SeasonDisplay></SeasonDisplay>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
