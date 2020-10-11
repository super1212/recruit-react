import { combineReducers } from "redux";
import creditCardReducer from "./creditCard/index.reducer";

const entitiesReducer = combineReducers({
    creditCards: creditCardReducer,
});

export default entitiesReducer;
