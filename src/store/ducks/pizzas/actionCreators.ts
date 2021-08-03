import {ActionsType, IFetchPizzas, ISetCategory, ISetLoaded, ISetPizzas, ISetSortBuy} from "./contracts/actionTypes";
import {IPizzasState} from "./contracts/state";
import {IRequestPizzas} from "../../../api/pizzas-api";

export const setSortBuy = (payload: IPizzasState['sortBy']): ISetSortBuy => ({
    type: ActionsType.SET_SORT_BUY,
    payload
});

export const setCategory = (payload: IPizzasState['category']): ISetCategory => ({
    type: ActionsType.SET_CATEGORY,
    payload
});

export const setLoaded = (payload: boolean): ISetLoaded => ({
    type: ActionsType.SET_LOADED,
    payload
});

export const fetchPizzas = (payload: IRequestPizzas): IFetchPizzas => ({
    type: ActionsType.FETCH_PIZZAS,
    payload
})

export const setPizzas = (payload: IPizzasState['items']): ISetPizzas => ({
    type: ActionsType.SET_PIZZAS,
    payload
});
