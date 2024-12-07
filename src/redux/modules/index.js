import { combineReducers } from "@reduxjs/toolkit";
import repos from "./repos";
import theme from "./theme";

const rootReducer = combineReducers({
  repos,
  theme,
});
export default rootReducer;
