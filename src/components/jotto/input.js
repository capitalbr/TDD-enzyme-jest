import React, { Component } from "react";
import { connect } from "react-redux";
import { addGuessedWord } from "../../actions/actions";

export class UnconnectedInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentGuess: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    e.preventDefault()
    this.setState({ currentGuess: e.target.value});
  };

  handleClick(e){
    e.preventDefault()
    const guessWord = this.state.currentGuess;
    if (guessWord && guessWord.length) {
      this.props.addGuessedWord(guessWord);
      this.setState({ currentGuess: "" });
    }
  };

  render(){
    const contents = this.props.success
      ? null
      : (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            type="text"
            placeholder="make a guess"
            value={this.state.currentGuess}
            onChange={this.handleChange}
          />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            type="submit"
            onClick={this.handleClick}>
            Submit
          </button>
        </form>
      )
    return(
      <div data-test="component-input">
        {contents}
      </div>
    )
  }
};

const mapStateToProps = ({ success }) => {
  return { success }
};

// don't need a controlled dispatch so this is unnecessary
// const mapDispatchToProps = ( dispatch ) => (
//   { addGuessedWord: (word) => dispatch(addGuessedWord(word)) }
// )

export default connect(mapStateToProps, { addGuessedWord })(UnconnectedInput);