import {ActionsType, IFetchPizzas, ISetCategory, ISetLoaded, ISetPizzas, ISetSortBuy} from "./contracts/actionTypes";
import {IPizzasState} from "./contracts/state";

export const setSortBuy = ({type, order}: IPizzasState['sortBy']): ISetSortBuy => ({
    type: ActionsType.SET_SORT_BUY,
    payload: {type, order},
});

export const setCategory = (index: any): ISetCategory => ({
    type: ActionsType.SET_CATEGORY,
    payload: index,
});

export const setLoaded = (payload: boolean): ISetLoaded => ({
    type: ActionsType.SET_LOADED,
    payload
});

export const fetchPizzas = (): IFetchPizzas => ({
    type: ActionsType.FETCH_PIZZAS
})

export const setPizzas = (items: IPizzasState['items']): ISetPizzas => ({
    type: ActionsType.SET_PIZZAS,
    payload: items,
});
