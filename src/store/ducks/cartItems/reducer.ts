import {ICartState} from "./contracts/state";
import {ActionsType, IActions} from "./contracts/actionTypes";

const initialState: ICartState = {
    items: {},
    totalCount: 0,
    totalPrice: 0
}

const getTotalPrice = (arr: any[]) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj: any, path: string) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj: any, path: string) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};


export const cartReducer = (state = initialState, action: IActions) => {
    switch (action.type) {
        case ActionsType.ADD_PIZZA_CART: {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                },
            };

            const totalCount = getTotalSum(newItems, "items.length");
            const totalPrice = getTotalSum(newItems, "totalPrice");

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case ActionsType.REMOVE_CART_ITEM: {
            const newItems = {
                ...state.items,
            };
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;
            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            };
        }

        case ActionsType.PLUS_CART_ITEM: {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, "items.length");
            const totalPrice = getTotalSum(newItems, "totalPrice");

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case ActionsType.MINUS_CART_ITEM: {
            const oldItems = state.items[action.payload].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, "items.length");
            const totalPrice = getTotalSum(newItems, "totalPrice");

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case ActionsType.CLEAR_CART:
            return { totalPrice: 0, totalCount: 0, items: {} };

        default:
            return state;
    }
};