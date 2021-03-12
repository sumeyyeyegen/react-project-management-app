import React, { useContext } from 'react'
import ProjectManagementContext from '../Contexts/ProjectManagementContext';

function Task({ task, projectId }) {
    const { updateTask, deleteTask } = useContext(ProjectManagementContext);
    return (
        <li>
            <div className="view">
                {
                    task.checked ?
                        (
                            <input
                                className="toggle"
                                type="checkbox"
                                value={task.id}
                                onChange={(e) => updateTask(task.id, e.target.checked)}
                                checked
                            />
                        ) :
                        (
                            <input
                                type="checkbox" className="toggle" value={task.id}
                                onChange={(e) => updateTask(task.id, e.target.checked)}
                            />
                        )
                }
                <label> {task.title}</label >
                <button className="destroy" onClick={() => deleteTask(task.id, projectId)}></button>
            </div>
        </li>
    )
}

export default Task
