import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import FormContainer from '../Form/FormContainer.jsx';

const Main = () => {
    return (
        <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/form/:id' component={FormContainer}/>
        </Switch>
    </main>
    );
};

export default Main;