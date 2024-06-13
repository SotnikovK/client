import { combineReducers } from "redux";
import devicesReducer from "./devicesReducer.js";
import filterReducer from "../reducers/filterReducer.js";

const rootReducer = combineReducers({
  devices: devicesReducer,
  filter: filterReducer,
});

export default rootReducer;
