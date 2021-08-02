import produce, {Draft} from "immer";
import {EnumSortByOrder, EnumSortByType, IPizzasState} from "./contracts/state";
import {ActionsType, IActions} from "./contracts/actionTypes";

const initialState: IPizzasState = {
    items: [],
    isLoaded: false,
    category: null,
    sortBy: {
        type: EnumSortByType.POPULAR,
        order: EnumSortByOrder.DESC,
    }
}

export const pizzasReducer = produce((draft: Draft<IPizzasState>, action: IActions) => {
    switch (action.type) {
        case ActionsType.SET_LOADED:
            draft.isLoaded = action.payload
            break;
        case ActionsType.SET_PIZZAS:
            draft.items = action.payload
            break;
        case ActionsType.SET_SORT_BUY:
            draft.sortBy = action.payload
            break;
        case ActionsType.SET_CATEGORY:
            draft.category = action.payload
            break;
        default:
            break;
    }
}, initialState)