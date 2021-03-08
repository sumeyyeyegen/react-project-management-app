import React from 'react'
import '../App.css';

function Project({ project }) {
    return (
        <div className="col-md-4 col-6 mb-4">
            <div className="card test">
                <div className="card-body">
                    <span>{project.name} </span>
                    <div className="text-right">
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
