import React, { Component } from "react";
import { connect } from "react-redux";
import { addGuessedWord } from "../../actions/actions";

class Input extends Component{
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
          />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            type="submit">
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

export default connect(mapStateToProps, { addGuessedWord })(Input);