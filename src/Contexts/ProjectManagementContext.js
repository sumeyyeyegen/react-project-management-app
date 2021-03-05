import { useState, createContext } from 'react';
const ProjectManagementContext = createContext({});

export const ProjectManagementProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");


    const values = {
        name,
        setName,
        surname,
        setSurname
    };

    return <ProjectManagementContext.Provider value={values}>{children}</ProjectManagementContext.Provider>;
};

export default ProjectManagementContext;