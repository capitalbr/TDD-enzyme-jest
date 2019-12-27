import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      errorStatus: ""
    };
  }

  handleIncrement(){
    this.setState({
      counter: this.state.counter + 1
    });
    if (this.state.errorStatus) this.setState({ errorStatus: "" });
  };

  handleDecrement(){
    if (this.state.counter > 0){
      this.setState({ 
        counter: this.state.counter - 1 
      });
    } else {
      this.setState({ 
        errorStatus: "You can't decrement count below zero!"
      })
    }; 
  };
 

  render(){
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">click count is {this.state.counter}</h1>
        <div
          data-test="counter-error">
          {this.state.errorStatus}
        </div>
        <button 
          data-test="increment-button"
          onClick={this.handleIncrement.bind(this)}>
          Increment Counter
        </button>
        <button
          data-test="decrement-button"
          onClick={this.handleDecrement.bind(this)}>
          Decrement Counter
        </button>
      </div>
    );
  }
}

export default App;
