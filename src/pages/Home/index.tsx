import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchPizzas, setCategory, setSortBuy} from "../../store/ducks/pizzas/actionCreators";
import {LoadingBlock as PizzaLoadingBlock} from './components/PizzaBlock/LoadingBlock'
import {
    selectPizzasCategory,
    selectPizzasIsLoaded,
    selectPizzasItems,
    selectPizzasSortBy
} from "../../store/ducks/pizzas/selectors";
import {InItem} from "../../store/ducks/cartItems/contracts/state";
import {selectCartItems} from "../../store/ducks/cartItems/selectors";
import {SortPopup} from "./components/SortPopup";
import {addPizzaToCart} from "../../store/ducks/cartItems/actionCreators";
import {Categories} from "./components/Categories";
import {PizzaBlock} from "./components/PizzaBlock";


export const Home = () => {
    const PizzaItems = useSelector(selectPizzasItems);
    const cartItems = useSelector(selectCartItems);
    const isLoaded = useSelector(selectPizzasIsLoaded);
    const sortBy = useSelector(selectPizzasSortBy);
    const category = useSelector(selectPizzasCategory);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas({category, sortBy}))
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback(index => dispatch(setCategory(index)), []);
    const onSelectSortType = React.useCallback(sort => dispatch(setSortBuy(sort)), []);

    const handleAddPizzaToCart = (obj: InItem) => {
      dispatch(addPizzaToCart(obj))
    };

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category}
                            onClickCategory={onSelectCategory}
                            items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые",]}/>
                <SortPopup activeSortType={sortBy.type}
                           onClickSortType={onSelectSortType}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? PizzaItems.map((obj) =>
                        <PizzaBlock
                        onClickAddCart={handleAddPizzaToCart}
                        {...obj}
                        key={obj.id}
                        addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                        />)
                    : Array(10).fill(0).map((_, index) => <PizzaLoadingBlock key={index}/>)}
            </div>
        </div>
    )
};
