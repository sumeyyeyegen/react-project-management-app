import React from 'react'
import '../App.css';

function Project({ project }) {
    return (
        <div className="col-md-4 col-6 mb-4">
            <div className="card">
                <div className="card-body">
                    <span>{project.name} </span>
                    <div>
                        <button>
                            deneme
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
