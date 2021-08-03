import React from "react";


interface ICategoriesProps {
    activeCategory: string | null,
    items: string[]
    onClickCategory: (item: number| null) => void
}

export const Categories: React.FC<ICategoriesProps> = React.memo(({activeCategory, items, onClickCategory}) => {
    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}>
                    Все
                </li>
                {items && items.map((name, index) =>
                    <li className={activeCategory === index ? "active" : ""}
                        onClick={() => onClickCategory(index)} key={`${name}_${index}`}>{name}</li>)}
            </ul>
        </div>
    )
});
