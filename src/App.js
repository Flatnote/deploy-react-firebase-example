import React, { Component } from 'react';
import './App.css';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="w3-content w3-margin-top" style={{'max-width':'1400px'}}>
          <div className="w3-row-padding">
              <LeftColumn />
              <RightColumn />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
