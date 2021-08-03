import {RootState} from "../../store";
import {ICartState} from "./contracts/state";


export const selectCartState = (state: RootState): ICartState => state.cart

export const selectCartItems = (state: RootState): ICartState['items'] =>
    selectCartState(state).items
