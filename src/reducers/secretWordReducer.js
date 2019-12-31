import { SET_SECRET_WORD } from "../actions/actions";

export default (oldState=null, action) => {
  switch(action.type){
    case SET_SECRET_WORD:
      return action.secretWord;
    default:
      return oldState
  }
};
