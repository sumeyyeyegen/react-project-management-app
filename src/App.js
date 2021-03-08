import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import IndexPage from './Components/IndexPage';
import CreateProject from './Components/CreateProjectPage';


function App() {

  return (
    <Switch>
      <Route path="/" exact component={IndexPage} />
      <Route path="/project/add"
        component={() => <CreateProject />} />
    </Switch>
  );
}

export default App;
