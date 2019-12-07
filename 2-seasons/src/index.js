import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = {
    lat: null,
    errMsg: "",
  };

  // good place to do data-loading
  componentWillMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat: position.coords.latitude}),
      (err) => this.setState({errMsg: err.message})
    );
  }

  render() {
    return (
      <div>
        {this.state.lat && (
          <SeasonDisplay lat={this.state.lat}/>
        )}
        {this.state.errMsg && (
          <h1>Error: {this.state.errMsg}</h1>
        )}
        {!this.state.lat && !this.state.errMsg && (
          <Spinner message="Please accept location request"/>
        )}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
