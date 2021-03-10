import React, { useContext } from 'react'
import ProjectManagementContext from '../Contexts/ProjectManagementContext';

function Task({ task }) {
    const { updateTask } = useContext(ProjectManagementContext);
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
                <button className="destroy"></button>
            </div>
        </li>
    )
}

export default Task
