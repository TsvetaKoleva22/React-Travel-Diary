import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from './Register';
import Login from './Login';

const UserMain = (props) => {
    return (
        <Switch>
            <Route path={props.match.path + '/register'} render={() => <Register registerUser={props.registerUser} username={props.username} />} />
            <Route path={props.match.path + '/login'} render={() => <Login loginUser={props.loginUser} username={props.username} />} />
        </Switch>
    )
}

export default UserMain;
