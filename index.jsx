import React, {Component} from "react";
import ReactDOM from "react-dom";

class Clocks extends Component {
  constructor() {
    super();

    this.state = {
      currentTime: (new Date()).toLocaleString()
    };

    this.timeChanger();
  }
  

  timeChanger() {
    setInterval(() => {
      this.setState({
        currentTime: (new Date()).toLocaleString()
      }), 1000
    });
  }
  
  render() {
    return (
      <div>{this.state.currentTime}</div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Clocks />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
