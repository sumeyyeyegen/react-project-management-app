import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import IndexPage from './Components/IndexPage';
import Projects from './Components/Projects';


function App() {

  return (
    <Switch>
      <Route path="/" exact component={IndexPage} />
      <Route path="/project/add"
        component={() => <Projects />} />
    </Switch>
  );
}

export default App;
