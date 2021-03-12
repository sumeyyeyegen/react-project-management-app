import React, { useContext, useState } from 'react'
import ProjectManagementContext from '../Contexts/ProjectManagementContext';

function CreateProject() {
    const { addProject, createSelectItems } = useContext(ProjectManagementContext);
    const [projectName, setProjectName] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const handleChange = (e) => {
        setSelectedCategory(e.target.value)
    }
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

            <select className="custom-select form-group" onChange={e => handleChange(e)}>
                {createSelectItems()}
            </select>
            <button className="btn btn-block" style={{ background: '#020245', color: 'white' }} type="submit">Create</button>
        </form>
    )
}

export default CreateProject
