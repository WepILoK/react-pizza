import {combineReducers} from "redux";
import {pizzasReducer} from "./ducks/pizzas/reducer";
import {cartReducer} from "./ducks/cartItems/reducer";

export const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    cart: cartReducer
});