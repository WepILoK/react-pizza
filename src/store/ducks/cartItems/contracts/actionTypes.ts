import {Action} from "redux";


export enum ActionsType {
    ADD_PIZZA_CART = "cartItems/ADD_PIZZA_CART",
    CLEAR_CART = "cartItems/CLEAR_CART",
    REMOVE_CART_ITEM = "cartItems/REMOVE_CART_ITEM",
    PLUS_CART_ITEM = "cartItems/PLUS_CART_ITEM",
    MINUS_CART_ITEM = "cartItems/MINUS_CART_ITEM",
}

export interface IAddPizzaToCart extends Action<ActionsType> {
    type: ActionsType.ADD_PIZZA_CART
    payload: pizzaOdj
}

export interface IClearCart extends Action<ActionsType> {
    type: ActionsType.CLEAR_CART
}

export interface IRemoveCartItem extends Action<ActionsType> {
    type: ActionsType.REMOVE_CART_ITEM
    payload: number
}

export interface IPlusCartItem extends Action<ActionsType> {
    type: ActionsType.PLUS_CART_ITEM
    payload: number
}

export interface IMinusCartItem extends Action<ActionsType> {
    type: ActionsType.MINUS_CART_ITEM
    payload: number
}


export type IActions =
    IAddPizzaToCart
    | IClearCart
    | IRemoveCartItem
    | IPlusCartItem
    | IMinusCartItem
