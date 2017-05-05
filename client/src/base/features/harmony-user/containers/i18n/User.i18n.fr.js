import { defineMessages } from 'react-intl';

const messages = defineMessages({
    login: {
        id: 'user.login',
        defaultMessage: "S'identifier",
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
        defaultMessage: 'Entrez un email',
        description: 'Email error message',
    },
    password: {
        id: 'user.password',
        defaultMessage: 'Mot de passe',
        description: 'Password title',
    }

});

export default messages;