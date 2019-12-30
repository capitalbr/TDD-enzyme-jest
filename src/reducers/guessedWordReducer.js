import { GUESSED_WORD } from "../actions/actions";

export default (oldState=[], action) => {
  Object.freeze(oldState);
  switch(action.type){
    case GUESSED_WORD:
      return oldState.concat([action.value]);
    default:
      return oldState
  }
};