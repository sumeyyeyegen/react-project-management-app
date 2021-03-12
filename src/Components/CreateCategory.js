import React, { useState, useContext } from 'react'
import ProjectManagementContext from '../Contexts/ProjectManagementContext'

function CreateCategory() {
    const [category, setCategory] = useState("");
    const { addCategory } = useContext(ProjectManagementContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addCategory(category)
        setCategory("");
    }
    return (
        <form onSubmit={e => handleSubmit(e)} className="form-group">
            <input type="text" className="form-control form-control-sm" placeholder="Enter a category name" value={category} onChange={(e) => { setCategory(e.target.value) }} />
        </form>
    )
}

export default CreateCategory
