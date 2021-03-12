import React, { useContext } from 'react'
import '../App.css';
import Tasks from './Tasks';
import CreateTask from './CreateTask';
import ProjectManagementContext from '../Contexts/ProjectManagementContext';

function Project({ project }) {
    const { deleteProject } = useContext(ProjectManagementContext);
    return (
        <div className="col-md-4 col-6 mb-4">
            <div className="card project-card">
                <div className="card-body">
                    <span>{project.name}</span>
                    <span>{project.category.categoryName}</span>
                    <div className="text-right">
                        <Tasks tasks={project.tasks} projectId={project.id} />
                        <CreateTask project={project} />
                        <button className="btn btn-sm" onClick={() => deleteProject(project.id)} style={{ background: '#FF0000', color: 'white' }}>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
