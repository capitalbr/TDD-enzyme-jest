import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleButtonClick(){
    this.setState({
      counter: this.state.counter + 1
    })
  };

  render(){
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">click count is {this.state.counter}</h1>
        <button 
          data-test="increment-button"
          onClick={this.handleButtonClick.bind(this)}>
          Increment Counter
        </button>
      </div>
    );
  }
}

export default App;
