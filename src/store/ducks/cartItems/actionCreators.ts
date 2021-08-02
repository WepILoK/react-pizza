import {
    ActionsType,
    IAddPizzaToCart,
    IClearCart,
    IMinusCartItem,
    IPlusCartItem,
    IRemoveCartItem
} from "./contracts/actionTypes";


export const addPizzaToCart = (pizzaOdj): IAddPizzaToCart => ({
    type: ActionsType.ADD_PIZZA_CART,
    payload: pizzaOdj,
});

export const clearCart = (): IClearCart => ({
    type: ActionsType.CLEAR_CART,
});

export const removeCartItem = (id): IRemoveCartItem => ({
    type: ActionsType.REMOVE_CART_ITEM,
    payload: id,
});

export const plusCartItem = (id): IPlusCartItem => ({
    type: ActionsType.PLUS_CART_ITEM,
    payload: id,
});

export const minusCartItem = (id): IMinusCartItem => ({
    type: ActionsType.MINUS_CART_ITEM,
    payload: id,
});

