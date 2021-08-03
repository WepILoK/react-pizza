import {Action} from "redux";
import {IPizzasState} from "./state";
import {IRequestPizzas} from "../../../../api/pizzas-api";


export enum ActionsType {
    FETCH_PIZZAS = "pizzas/FETCH_PIZZAS",
    SET_PIZZAS = "pizzas/SET_PIZZAS",
    SET_LOADED = "pizzas/SET_LOADED",
    SET_SORT_BUY = "pizzas/SET_SORT_BUY",
    SET_CATEGORY = "pizzas/SET_CATEGORY",
}

export interface ISetLoaded extends Action<ActionsType> {
    type: ActionsType.SET_LOADED
    payload: boolean
}

export interface ISetPizzas extends Action<ActionsType> {
    type: ActionsType.SET_PIZZAS
    payload: IPizzasState['items']
}

export interface ISetSortBuy extends Action<ActionsType> {
    type: ActionsType.SET_SORT_BUY
    payload: IPizzasState['sortBy']
}
//TODO: указать тип
export interface ISetCategory extends Action<ActionsType> {
    type: ActionsType.SET_CATEGORY
    payload: IPizzasState['category']
}

export interface IFetchPizzas extends Action<ActionsType> {
    type: ActionsType.FETCH_PIZZAS
    payload: IRequestPizzas
}

export type IActions =
    ISetLoaded
    | ISetPizzas
    | ISetSortBuy
    | ISetCategory
    | IFetchPizzas
