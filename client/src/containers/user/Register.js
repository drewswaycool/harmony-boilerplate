import React, { Component } from 'react';
import { connectWithReduxForm } from 'redux-form-field';
import { Link } from 'react-router';
import * as actions from '../../actions/user/actions_user';

import { ROOT } from '../../routes';
import { Cor_Input } from '../../components/core';

class Register extends Component {
    render() {

        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit.bind(this))} >

                <h1>Register</h1>

                <Cor_Input name="email" type="email" label="Email" />
                <Cor_Input name="password" type="password" label="Password" />
                <Cor_Input name="repassword" type="password" label="Repeat Password" />

                <br/>
                <div>{this.props.registerError}</div>

                <button type="submit" className="btn btn-success">Register</button>
                <Link to={ROOT} style={{float:'right'}} className="btn btn-default">Back to Login</Link>


            </form>
        );

    }

    handleSubmit(props) {
        return new Promise(() => {
            this.props.createUser(props);
        });
    }
}

function validate(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'Enter a Email';
    }

    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Enter a Password';
    }

    if (!values.repassword){
        errors.repassword = 'Enter a Password';
    }

    if (values.password !== values.repassword) {
        errors.repassword = 'Repeat password not mach to password';
    }


    return errors;
}


export default connectWithReduxForm(Register,
    (state) => {
        return {
            registerError: state.user.get('registerError')
        }
    },
    {
        createUser: actions.createUser
    },
    {
        form : 'RegisterForm',
        fields: [],
        validate
    }
);