import React, { useContext } from 'react'
import ProjectManagementContext from '../Contexts/ProjectManagementContext';
import Category from './Category'

function Categories() {
    const { categories } = useContext(ProjectManagementContext);
    return (
        <div className="card mt-4">
            <div className="m-2">
                <ul className="list">
                    {categories.map(category => {
                        return <Category key={category.id} category={category} />
                    })}

                </ul>
            </div>
        </div>
    )
}

export default Categories
