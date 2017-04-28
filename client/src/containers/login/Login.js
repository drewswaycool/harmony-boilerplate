import React, { Component } from 'react';
import { connectWithReduxForm } from 'redux-form-field';
import { Link } from 'react-router';
import * as actions from '../../actions/login/actions_login';

import { REGISTER } from '../../routes';
import { Cor_Input } from '../../components/core';


class Login extends Component {
    render() {

        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit.bind(this))} >

                <h1>Login</h1>

                <Cor_Input name="username" type="text" label="Username" />
                <Cor_Input name="password" type="text" label="Password" />

                <button type="submit" className="btn btn-success">Login</button>
                <Link to={REGISTER} style={{float:'right'}} className="btn btn-default">Register</Link>

            </form>
        );

    }

    handleSubmit(props) {
        return new Promise(() => {
            // handle submit here
        });
    }
}

function validate(values) {
    const errors = {};

    if (!values.username) {
        errors.username = 'Enter a username';
    }

    if (!values.password) {
        errors.password = 'Enter a password';
    }

    return errors;
}


export default connectWithReduxForm(Login,
    (state) => {
        return {

        }
    },
    {

    },
    {
        form : 'LoginForm',
        fields: [],
        validate
    }
);