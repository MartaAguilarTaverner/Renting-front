import axios from 'axios';

export const doLogin = ({ email, password }) =>
    axios.post('http://localhost:3001/user/login', {
        email,
        password,
    });

export const doRegister = ({ name, email, password, dateBirth, subscription }) =>
    axios.post('http://localhost:3001/user', {
        name,
        email,
        password,
        dateBirth,
        subscription,
    });

export const getAllUsers = (token) =>
    axios.get('http://localhost:3001/user', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
