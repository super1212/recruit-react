import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import entitiesReducer from "./entities/index.reducer";

const rootReducer = (history) =>
combineReducers({
    router: connectRouter(history),
    entities: entitiesReducer,
    currentUser:{firstName: 'Youfa', secondName: 'Wang'}
});

export default rootReducer;
