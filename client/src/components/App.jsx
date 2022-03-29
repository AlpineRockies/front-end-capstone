import React, { Component } from 'react';

// Here is out base App component.
// Notice we are NOT using jsx here. This is because we have not set up babel yet.
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (<div className="app">Hello World</div>);
  }
}

export default App;
