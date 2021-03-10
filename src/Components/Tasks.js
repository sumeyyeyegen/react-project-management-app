import React, { useContext } from 'react'
import Task from './Task';
import ProjectManagementContext from '../Contexts/ProjectManagementContext';

function Tasks({ tasks }) {
    return (
        <ul className="todo-list">
            {
                tasks.map(task => <Task key={task.id} task={task} />)
            }
        </ul>
    )
}

export default Tasks
