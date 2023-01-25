import React from "react"

type CategoriesPorps = {
    value: number;
    onChangeCategory: (idx: number) => void;
}

const categories = ['All', 'Meath', 'Vegetarian', 'Grill', 'Hot', 'Closed'];

export const Categories: React.FC<CategoriesPorps> = React.memo(({ value, onChangeCategory }) => {
    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, i) => (
                    <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div>
    );
});