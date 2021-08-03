import {
    ActionsType,
    IAddPizzaToCart,
    IClearCart,
    IMinusCartItem,
    IPlusCartItem,
    IRemoveCartItem
} from "./contracts/actionTypes";
import {InItem} from "./contracts/state";


export const addPizzaToCart = (payload: InItem): IAddPizzaToCart => ({
    type: ActionsType.ADD_PIZZA_CART,
    payload
});

export const clearCart = (): IClearCart => ({
    type: ActionsType.CLEAR_CART,
});

export const removeCartItem = (payload: number): IRemoveCartItem => ({
    type: ActionsType.REMOVE_CART_ITEM,
    payload
});

export const plusCartItem = (payload: number): IPlusCartItem => ({
    type: ActionsType.PLUS_CART_ITEM,
    payload
});

export const minusCartItem = (payload: number): IMinusCartItem => ({
    type: ActionsType.MINUS_CART_ITEM,
    payload
});

