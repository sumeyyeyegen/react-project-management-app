import { useState, createContext, useEffect } from 'react';
import { v1 as uuid } from 'uuid';
const ProjectManagementContext = createContext({});

export const ProjectManagementProvider = ({ children }) => {
    const initialCategories = [
        { name: "Category 1", id: uuid(), projects: [] },
        { name: "Category 2", id: uuid(), projects: [] },
        { name: "Category 3", id: uuid(), projects: [] },
        { name: "Category 4", id: uuid(), projects: [] },
        { name: "Category 5", id: uuid(), projects: [] },
        { name: "Category 6", id: uuid(), projects: [] },
    ]
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [categories, setCategories] = useState(initialCategories);
    const initialProject = JSON.parse(localStorage.getItem('projects')) || []

    const [projects, setProjects] = useState(initialProject);

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    // const addProjecttoCategory = (projectID) => {
    //     setCategories()
    // }
    const filter = () => {
        const category = initialCategories.map(category => category)
        console.log(category);
    }
    const addProject = (name, categoryName) => {
        setProjects([...projects, { name, id: uuid(), tasks: [], category: { categoryName, id: uuid() } }]);
        console.log(projects);
    }

    const addCategory = (categoryName) => {
        setCategories([...categories, { name: categoryName, id: uuid() }])
    }
    const deleteProject = id => {
        const updatedProjects = projects.filter(project => project.id !== id);
        setProjects(updatedProjects);
    }
    const addTask = (title, id) => {
        const getIndex = projects.findIndex(project => project.id === id);
        const updatedProjects = [...projects];
        updatedProjects[getIndex].tasks.push({ title: title, id: uuid(), checked: false })
        setProjects(updatedProjects);
    }
    // const addCategory = (categoryName) => {
    //     setCategories([{ name: categoryName, id: uuid(), projects: [] }])
    // }
    const deleteTask = (id, projectId) => {
        const currentProject = projects.filter(project => project.id === projectId);
        const Projects = projects.filter(project => project.id !== projectId);
        const currentTask = currentProject[0].tasks.filter(task => task.id !== id);
        currentProject[0].tasks = currentTask;
        const newProjects = currentProject.concat(Projects);
        setProjects(newProjects);
    }
    const updateTask = (id, checked) => {
        const getIndex = projects.map(project => project.tasks.findIndex(task => task.id === id));
        let Tasks = projects.map(project => project.tasks);
        const index = getIndex.filter((data) => data !== -1);
        const indis = getIndex.indexOf(index[0]);
        const value = index[0];
        let updatedProjects = [...projects];
        Tasks[indis][value].checked = checked;
        setProjects(updatedProjects);
    }
    const createSelectItems = () => {
        let items = [];
        initialCategories.map(category => items.push(<option key={category.id} value={category.name}>{category.name}</option>))

        return items;
    }

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
        deleteTask,
        deleteProject,
        createSelectItems,
        categories,
        setCategories,
        addCategory,
        filter
    };

    return <ProjectManagementContext.Provider value={values}>{children}</ProjectManagementContext.Provider>;
};

export default ProjectManagementContext;