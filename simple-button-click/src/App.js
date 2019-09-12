import React from 'react';
import logo from './logo.svg';
import './App.css';

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn1: false,
      isToggleOn2: false,
      isToggleOn3: false,
      clickCount: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isToggleOn1: !this.state.isToggleOn1
    })
  }

  handleSecondButtonClick(e) {
    this.setState({
      isToggleOn2: !this.state.isToggleOn2
    })
  }

  handleClick3 = () => {
    this.setState({
      isToggleOn3: !this.state.isToggleOn3
    })
  }

  handleClick4() {
    this.setState({
      clickCount: this.state.clickCount + 1
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h2>Binding event Handler:</h2>&nbsp;&nbsp;
          <button onClick={this.handleClick}>
            {this.state.isToggleOn1 ? "On" : "Off"}
          </button>
        </div>
        <br />
        <div>
          <h2>Event Handler With Anonymous Function:</h2>&nbsp;&nbsp;
          <button onClick={(e) => this.handleSecondButtonClick(e)}>
            {this.state.isToggleOn2 ? "On" : "Off"}
          </button>
        </div>
        <br />
        <div>
          <h2>Event Handler With Arrow Function:</h2>&nbsp;&nbsp;
          <button onClick={this.handleClick3}>
            {this.state.isToggleOn3 ? "On" : "Off"}
          </button>
        </div>
        <br />
        <div>
          <h2>Event Handler With Parameter:</h2>&nbsp;&nbsp;
          <button onClick={this.handleClick4.bind(this, "Hello click")}>
            Click Me {this.state.clickCount}
          </button>
        </div>
      </React.Fragment>
    )
  }
}

function App() {
  return (
    <Toggle />
  );
}

export default App;
