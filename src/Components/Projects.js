import React, { useContext, useState } from 'react';
import img1 from '../assets/Images/women.png';
import ProjectManagementContext from '../Contexts/ProjectManagementContext';
import Project from './Project';
import CreateProject from './CreateProject';

const Projects = () => {
    const { projects } = useContext(ProjectManagementContext);
    const userName = localStorage.getItem('name');
    const userSurname = localStorage.getItem('surname');

    return (
        <div className="container mt-4">
            <div className="row d-md-flex justify-content-center">
                <div className="col-md-3 col-6 mb-4 mb-md-0">
                    <div className="userInfo card profile-card">
                        <div className="card-body">
                            <img src={img1} className="img-1" alt="" />
                            <div>
                                {userName}   {userSurname}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 col-12">
                    <div className="row">
                        {projects.length ? (
                            projects.map(project => {
                                return <Project key={project.id} project={project} />
                            })
                        ) : (
                            <div className="card">
                                <div className="card-body">
                                    Hiç proje yok.
                                </div>
                            </div>
                        )
                        }
                        <div className="col-md-4 col-6">
                            <div className="card">
                                <div className="card-body">
                                    <CreateProject />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
