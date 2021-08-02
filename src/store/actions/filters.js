export const setSortBuy = ({type, order}) => ({
    type: "SET_SORT_BUY",
    payload: {type, order},
});
export const setCategory = (index) => ({
    type: "SET_CATEGORY",
    payload: index,
});
