import React, { useContext, useState } from 'react'
import ProjectManagementContext from '../Contexts/ProjectManagementContext';

function CreateProject() {
    const { addProject, createSelectItems, categories } = useContext(ProjectManagementContext);
    const [projectName, setProjectName] = useState("");
    const [selectedCategory, setSelectedCategory] = useState([]);
    const handleNewProjectForm = (e) => {
        e.preventDefault();
        addProject(projectName, selectedCategory);
        setProjectName('');
    }
    const handleChange = (e) => {
        setSelectedCategory(e.target.value);
    }
    return (
        <form action="" onSubmit={e => handleNewProjectForm(e)}>
            <input type="text"
                className="form-control form-group"
                placeholder="Name"
                value={projectName}
                onChange={e => setProjectName(e.target.value)} />

            <select className="custom-select form-group" onChange={e => handleChange(e)}>
                {
                    categories.length && categories.map(category => {
                        return <option key={category.id} id={category.id} onChange={e => console.log(e.target.value)}>{category.name}</option>
                    })
                }
            </select>
            <button className="btn btn-block" style={{ background: '#020245', color: 'white' }} type="submit">Create</button>
        </form>
    )
}

export default CreateProject
