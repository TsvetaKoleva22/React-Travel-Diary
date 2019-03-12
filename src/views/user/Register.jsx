import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BindForm from './BindForm';


class Register extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, data) {
        event.preventDefault();
        this.props.registerUser(data);
    }

    render() {
        if (this.props.username) {
            return <Redirect to="/" />
        }
        return (
            <div className="form-wrapper">
                <h1 className="allHeading">Register</h1>

                <BindForm onSubmit={this.handleSubmit} butName='Register'>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter username" />
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" id="email" placeholder="Enter e-mail" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter password" />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Enter your password again" />
                </BindForm>
                
            </div>
        );
    }
}

export default Register;
