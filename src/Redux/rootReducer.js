import { combineReducers } from "redux";

import counterReducer from "./counter/counterReducer";

export default combineReducers({
  count: counterReducer
});