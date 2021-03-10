import { useState, createContext, useEffect } from 'react';
import { v1 as uuid } from 'uuid';
const ProjectManagementContext = createContext({});

export const ProjectManagementProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [editItem, setEditItem] = useState(null);

    const initialProject = JSON.parse(localStorage.getItem('projects')) || []

    const [projects, setProjects] = useState(initialProject);

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    const addProject = name => {
        setProjects([...projects, { name, id: uuid(), tasks: [] }]);
    }
    // const clearList = () => {
    //     setTasks([])
    // }
    // const updateProject = id => {
    //     const getIndex = projects.findIndex(project => project.id === id);
    //     const updatedProjects = [...projects];
    //     updatedProjects[getIndex].tasks = ;
    //     setProjects(updatedProjects);
    //     console.log(projects);

    // }
    const addTask = (title, id) => {
        const getIndex = projects.findIndex(project => project.id === id);
        const updatedProjects = [...projects];
        updatedProjects[getIndex].tasks.push({ title: title, id: uuid(), checked: true })
        setProjects(updatedProjects);
    }
    const updateTask = (id, checked) => {
        const getIndex = projects.map(project => project.tasks.findIndex(task => task.id === id))
        const Tasks = projects.map(project => project.tasks);
        console.log(Tasks);
        console.log(projects);
        Tasks[getIndex].checked = checked;
        setProjects([...projects, {
            tasks: Tasks
        }]);
        console.log(projects);
    }
    // const editTask = (title, id) => {
    //     const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))

    //     console.log(newTasks)

    //     setTasks(newTasks)
    //     setEditItem(null)
    // }
    const values = {
        name,
        setName,
        surname,
        setSurname,
        projects,
        setProjects,
        addProject,
        addTask,
        updateTask,
        editItem,
        setEditItem,
        // editTask,
        // clearList,
    };

    return <ProjectManagementContext.Provider value={values}>{children}</ProjectManagementContext.Provider>;
};

export default ProjectManagementContext;