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

<<<<<<< HEAD
  getData(){
    axios.get()
  }
  componentDidMount() {}
=======
  //example
  componentDidMount() {
    axios.get(`/products`)
      .then((response) => {
        console.log('in client', response);
      })
      .catch((err) => {
        console.log('err in client', err);
      });
  }
>>>>>>> 92579b09d6211c6d31ab0b68c0405942d45309ab

  render() {
    return (<div className="app">Team Alpine Rockies!</div>);
  }
}

export default App;
