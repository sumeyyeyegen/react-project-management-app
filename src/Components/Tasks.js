import React, { useContext } from 'react'
import Task from './Task';
import ProjectManagementContext from '../Contexts/ProjectManagementContext';

function Tasks({ tasks, projectId }) {
    return (
        <ul className="list">
            {
                tasks.map(task => <Task key={task.id} task={task} projectId={projectId} />)
            }
        </ul>
    )
}

export default Tasks
