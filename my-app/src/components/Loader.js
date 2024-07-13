import React, { Component } from 'react';
import loaderGif from '../images/loadingspinner.gif'; // Uppdatera sökvägen här

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <img src={loaderGif} alt="Loading..." />
      </div>
    );
  }
}

export default Loader;
