import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import RootLayout from './components/RootLayout';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ProfilePage from "./components/ProfilePage";
import * as serviceWorker from './serviceWorker';

import {HashRouter,Route,Link} from 'react-router-dom'
import AppBar from "./components/AppBar";

ReactDOM.render(
    <HashRouter>
        <div>
            <AppBar/>
        </div>
        <div>
            <Route exact path="/" component={RootLayout}/>
            <Route exact path="/index" component={RootLayout}/>
            <Route exact path="/SignIn" component={SignIn}/>
            <Route exact path="/SignUp" component={SignUp}/>
            <Route exact path="/Profile" component={ProfilePage}/>
        </div>
    </HashRouter>,document.getElementById('root')


);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
