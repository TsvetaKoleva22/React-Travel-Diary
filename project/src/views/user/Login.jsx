import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BindForm from './BindForm';


class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, data) {
        event.preventDefault();
        this.props.loginUser(data);
    }

    render() {
        if (this.props.username) {
            return <Redirect to="/" />
        }
        return (
            <div className="form-wrapper">
                <h1 className="allHeading">Login</h1>

                <BindForm onSubmit={this.handleSubmit} butName='Login'>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter password" />
                </BindForm>
                
            </div>
        );
    }
}

export default Login;
