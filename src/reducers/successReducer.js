import { CORRECT_GUESS } from "../actions/actions";

const successReducer = (oldState = false, action) => {
  switch(action.type){
    case CORRECT_GUESS:
      return true;
    default:
      return oldState
  }
};

export default successReducer;