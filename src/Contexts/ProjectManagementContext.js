import { useState, createContext, useEffect } from 'react';
import { v1 as uuid } from 'uuid';
const ProjectManagementContext = createContext({});

export const ProjectManagementProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [tasks, setTasks] = useState([]);
    const initialProject = JSON.parse(localStorage.getItem('projects')) || []

    const [projects, setProjects] = useState(initialProject);
    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    const addProject = name => {
        setProjects([...projects, { name, id: uuid() }]);
        console.log(projects);
    }

    const values = {
        name,
        setName,
        surname,
        setSurname,
        tasks,
        setTasks,
        projects,
        setProjects,
        addProject
    };

    return <ProjectManagementContext.Provider value={values}>{children}</ProjectManagementContext.Provider>;
};

export default ProjectManagementContext;