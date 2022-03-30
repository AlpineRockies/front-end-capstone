import React, { Component } from 'react';
import axios from 'axios';
// Here is out base App component.
// Notice we are NOT using jsx here. This is because we have not set up babel yet.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }



  render() {
    return (<div className="app">Team Alpine Rockies!</div>);
  }
}

export default App;
