import React from 'react'

function Category({ category }) {
    return (
        <li className="my-2">
            <input
                className="toggle"
                type="checkbox"
            />
            <label className="py-1 m-0">{category.name}</label>
        </li>
    )
}

export default Category
