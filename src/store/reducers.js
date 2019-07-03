import { combineReducers } from "redux";
import standartEX from "./standartEX/reducer";
import thunkEX from "./thunkEX/reducer";
import sagaEX from "./sagaEX/reducer";

export default combineReducers({
  standartEX: standartEX,
  thunkEX: thunkEX,
  sagaEX: sagaEX
});
