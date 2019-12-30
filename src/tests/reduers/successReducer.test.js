import { CORRECT_GUESS } from "../../actions/actions";
import successReducer from "../../reducers/successReducer";

test("Initially returns default state of 'false' when no action is passed", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test("Returns newState of 'true' when action 'CORRECT_GUESS' is passed", () => {
  const newState = successReducer(undefined, { type: CORRECT_GUESS });
  expect(newState).toBe(true);
});