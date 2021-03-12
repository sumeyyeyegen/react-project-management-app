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
    return (
        <form action="" onSubmit={e => handleNewProjectForm(e)}>
            <input type="text"
                className="form-control form-group"
                placeholder="Name"
                value={projectName}
                onChange={e => setProjectName(e.target.value)} />

            <select className="custom-select form-group">
                {
                    categories.length && categories.map(category => {
                        return <option key={category.id} >{category.name}</option>
                    })
                }
            </select>
            <button className="btn btn-block" style={{ background: '#020245', color: 'white' }} type="submit">Create</button>
        </form>
    )
}

export default CreateProject
