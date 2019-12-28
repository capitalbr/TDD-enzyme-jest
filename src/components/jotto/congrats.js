import React from "react";

export default (props) => {
  if (props.success === true){
    return <div data-test="component-congrats">
      <span data-test="congrats-message">
        Congrats you have guessed the word!
      </span>
    </div>
  } else {
    return <div data-test="component-congrats"></div>
  }
};