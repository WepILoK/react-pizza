import React, {useState} from "react";
import classNames from "classnames";
import {InItem} from "../../../../store/ducks/cartItems/contracts/state";
import {Button} from "../../../../components/Button";


interface IPizzaBlock {
    id: number
    name: string
    imageUrl: string
    price: number
    types: number[]
    sizes: number[]
    onClickAddCart: (obj: InItem) => void
    addedCount?: number
}

export const PizzaBlock: React.FC<IPizzaBlock> = ({
                                                      id,
                                                      name,
                                                      sizes,
                                                      price,
                                                      imageUrl,
                                                      types,
                                                      onClickAddCart,
                                                      addedCount
                                                  }) => {
    const typeNames = ["тонкое", "традиционное"];
    const availableSizes = [26, 30, 40];

    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(0);

    const onSelectType = (type: number) => {
        setActiveType(type)
    };
    const onSelectSize = (size: number) => {
        setActiveSize(size)
    };
    const onAddPizza = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: availableSizes[activeSize],
            type: typeNames[activeType],
        };
        onClickAddCart(obj)
    };

    return (
        <div className="pizza-block">
            <img className="pizza-block__image"
                 src={imageUrl}
                 alt="Pizza"/>
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {typeNames.map((type, index) =>
                        <li className={classNames({
                            active: activeType === index,
                            disabled: !types.includes(index)
                        })}
                            key={`${type}_${index}`}
                            onClick={() => onSelectType(index)}>{type}</li>)}
                </ul>
                <ul>
                    {availableSizes.map((size, index) =>
                        <li className={classNames({
                            active: activeSize === index,
                            disabled: !sizes.includes(size)
                        })}
                            key={`${size}_${index}`}
                            onClick={() => onSelectSize(index)}>{size} см.</li>)}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <Button onClick={onAddPizza} className="button--add" outline>
                    <svg width="12"
                         height="12"
                         viewBox="0 0 12 12"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"/>
                    </svg>
                    <span>Добавить</span>
                    {addedCount && <i>{addedCount}</i>}
                </Button>
            </div>
        </div>
    )
};


