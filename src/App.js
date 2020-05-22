import {Fragment} from 'react'
import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import GithubState from "./context/github/GithubState";

import Navbar from "./components/includes/navbar";
import Users from "./components/users/Users"
import Search from './components/search'
import Alert from './components/includes/alert'
import About from './components/about'
import User from './components/users/UserView'

const App = () =>
{
    return (
          <GithubState>
          <Router>
          <div>
              <Navbar title="Github Finder" />
            <div className="container">
                <Switch>
                    <Route exact path='/' render={ props => (
                             <Fragment>
                             <Alert />
                             <Search />
                             <Users  />
                         </Fragment>
                    )
                    } />

                    <Route exact path='/about' component={About} />
                    <Route exact path='/user/:login' render = {props => (
                        <User { ...props } />
                    )

                    } />

                </Switch>
          
            </div>
          </div>
          </Router>
          </GithubState>
      );


}

export default App;
