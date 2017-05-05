import { defineMessages } from 'react-intl';

const messages = defineMessages({
    login: {
        id: 'user.login',
        defaultMessage: "Login",
        description: 'Login title',
    },
    register: {
        id: 'user.register',
        defaultMessage: "Register",
        description: 'Register title',
    },
	email: {
        id: 'user.email',
        defaultMessage: 'Email',
        description: 'Email title',
    },
    emailError: {
        id: 'user.emailError',
        defaultMessage: 'Enter a email',
        description: 'Email error message',
    },
    password: {
        id: 'user.password',
        defaultMessage: 'Password',
        description: 'Password title',
    }
});

export default messages;