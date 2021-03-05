import React, { useContext } from 'react'
import '../App.css';
import { Link, withRouter, useHistory } from 'react-router-dom';
import ProjectManagementContext from '../Contexts/ProjectManagementContext';

function IndexPage() {
    const { name, surname, setSurname, setName } = useContext(ProjectManagementContext);
    const onChangeName = event => {
        localStorage.setItem('name', event.target.value);
        setName(event.target.value);
    };
    const onChangeSurname = event => {
        localStorage.setItem('surname', event.target.value);
        setSurname(event.target.value);
    }
    const history = useHistory();
    const listener = (event) => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
            console.log("Enter key was pressed.");
            history.push("/project/create");
        }
    };
    return (
        <div className="App container">
            <div className="form">
                <div className="form-group text-left">
                    <label htmlFor="name" className=" mr-1">Ad</label>
                    <input value={name} type="text" id="name" className="form-control" onChange={onChangeName} />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="surname" className="mr-1">Soyad</label>
                    <input value={surname} type="text" id="surname" className="form-control" onChange={onChangeSurname} onKeyPress={e => listener(e)} />
                </div>
                <h3 className="mt-3">{name}   {surname}</h3>
            </div>
        </div>
    )
}
export default withRouter(IndexPage);