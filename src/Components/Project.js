import React from 'react'
import '../App.css';
import Tasks from './Tasks';
import CreateTask from './CreateTask';

function Project({ project }) {
    return (
        <div className="col-md-4 col-6 mb-4">
            <div className="card project-card">
                <div className="card-body">
                    <span>{project.name} </span>
                    <span>{project.id}</span>

                    <div className="text-right">
                        <Tasks tasks={project.tasks} />
                        <CreateTask project={project} />
                        <button className="btn btn-sm mr-2" style={{ background: '#A7E8C5', color: 'white' }}>
                            Edit
                        </button>
                        <button className="btn btn-sm" style={{ background: '#FF0000', color: 'white' }}>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
