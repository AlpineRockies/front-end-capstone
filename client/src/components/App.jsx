import React, { Component } from 'react';
import axios from 'axios';
import Overview from './Overview/Overview.jsx';
// Here is out base App component.
// Notice we are NOT using jsx here. This is because we have not set up babel yet.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  getData() {
    axios.get();
  }

  componentDidMount() {}

  // example
  componentDidMount() {
    axios.get('/products')
      .then((response) => {
        console.log('in client', response);
      })
      .catch((err) => {
        console.log('err in client', err);
      });
  }

  render() {
    return (
      <div className="app">
        Team Alpine Rockies!
        <Overview />
      </div>
    );
  }
}

export default App;
