import React, { useContext, useState } from 'react'
import ProjectManagementContext from '../Contexts/ProjectManagementContext';

function CreateProject() {
    const { projects, setProjects, addProject } = useContext(ProjectManagementContext);
    const [projectName, setProjectName] = useState("");
    const handleNewProjectForm = (e) => {
        e.preventDefault();
        addProject(projectName);
        setProjectName('');
    }
    return (
        <form action="" onSubmit={e => handleNewProjectForm(e)}>
            <input type="text"
                className="form-control"
                placeholder="Name"
                value={projectName}
                onChange={e => setProjectName(e.target.value)} />
            <button className="btn btn-block" style={{ background: '#020245', color: 'white' }} type="submit">Create</button>
        </form>
    )
}

export default CreateProject
