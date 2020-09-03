import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {Categories, PizzaBlock, SortPopup, PizzaLoadingBlock} from "../components";

import {setCategory, setSortBuy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";


const categoryName = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые",];
const sortItems = [
    {name: "популярности", type: "popular", order: "desc"},
    {name: "цене", type: "price", order: "desc"},
    {name: "алфавиту", type: "name", order: "asc"}];

const Home = () => {
    const PizzaItems = useSelector(({pizzas}) => pizzas.items);
    const cartItems = useSelector(({cart}) => cart.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback(index => dispatch(setCategory(index)), []);
    const onSelectSortType = React.useCallback(type => dispatch(setSortBuy(type)), []);

    const handleAddPizzaToCart = (obj) => {
      dispatch(addPizzaToCart(obj))
    };
    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category}
                            onClickCategory={onSelectCategory}
                            items={categoryName}/>
                <SortPopup activeSortType={sortBy.type}
                           onClickSortType={onSelectSortType}
                           items={sortItems}/>
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
// .filter((obj) => category === null ? obj : obj.category === category)
export default Home;