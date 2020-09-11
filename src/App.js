import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import "@fortawesome/fontawesome-free/css/all.min.css";

class App extends Component {
  render() {
    return <React.Fragment>
      <Navbar />
    </React.Fragment>
  }
}

export default App;
