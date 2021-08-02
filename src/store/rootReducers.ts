import {combineReducers} from "redux";
import {pizzasReducer} from "./ducks/pizzas/reducer";

export const rootReducer = combineReducers({
    pizzas: pizzasReducer,
});