import React, { useContext, useState } from 'react';
import img1 from '../assets/Images/women.png';
import ProjectManagementContext from '../Contexts/ProjectManagementContext';
import Project from './Project';

const CreateProjectPage = () => {
    const { projects, addProject, tasks, setTasks } = useContext(ProjectManagementContext);
    const [projectName, setProjectName] = useState("");
    const userName = localStorage.getItem('name');
    const userSurname = localStorage.getItem('surname');

    const handleNewProjectForm = (e) => {
        e.preventDefault();
        addProject(projectName);
        setProjectName('');
    }
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
                                return <Project project={project} key={project.id} />
                            })
                        ) : (
                            <div>Hiç proje yok.</div>
                        )
                        }
                        <div className="col-md-4 col-6">
                            <div className="card">
                                <div className="card-body">
                                    <form action="" onSubmit={e => handleNewProjectForm(e)}>
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            value={projectName}
                                            onChange={e => setProjectName(e.target.value)} />
                                        <button className="btn btn-block" style={{ background: '#b7410e', color: 'white' }} type="submit">Create</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProjectPage;
