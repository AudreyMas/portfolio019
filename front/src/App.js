import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/index.js';
import SignUp from './components/SignUp/index';
import ProjectList from './components/ProjectsList/index';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/projects" component={ProjectList} />


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
