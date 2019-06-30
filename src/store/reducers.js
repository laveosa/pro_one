import { combineReducers } from "redux";
import standartEX from "./standartEX/reducer";
import thunkEX from "./thunkEX/reducer";

export default combineReducers({
  standartEX: standartEX,
  thunkEX: thunkEX
});
