import axios from "axios";

export const doLogin = ({ email, password }) =>
    axios.post("http://localhost:3001/user/login", {
        email,
        password,
    });

export const doRegister = ({
    name,
    email,
    password,
    dateBirth,
    subscription,
}) =>
    axios.put("http://localhost:3001/user/register", {
        name,
        email,
        password,
        dateBirth,
        subscription,
    });

export const getAllUsers = (token) =>
    axios.get("http://localhost:3001/user", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
