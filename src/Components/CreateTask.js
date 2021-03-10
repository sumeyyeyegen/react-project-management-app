import React, { useState, useContext } from 'react'
import ProjectManagementContext from '../Contexts/ProjectManagementContext';

function CreateTask({ project }) {
    const [task, setTask] = useState("");
    const { addTask } = useContext(ProjectManagementContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task, project.id)
    }

    return (
        <form onSubmit={e => handleSubmit(e)} className="form-group input-group">
            <input className="form-control form-control-sm" value={task} placeholder="Enter a task name" type="text" onChange={(e) => { setTask(e.target.value) }} />
            <button className="btn btn-sm" style={{ background: '#020245', color: 'white' }} type="submit">Create</button>
        </form>
    )
}

export default CreateTask
