import React, { Component } from 'react';
import loaderGif from '../images/loadingspinner3.gif'; // Uppdatera sökvägen här

class Loader extends Component {
  render() {
    return (
      <div >
         <img src={loaderGif} alt="Loading..." style={{ width: '100px', height: '100px' }} />
      </div>
    );
  }
}

export default Loader;
