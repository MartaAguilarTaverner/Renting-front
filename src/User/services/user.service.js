import axios from "axios";

export const doLogin = ({ email, password }) =>
    axios.post("http://localhost:3001/user/login", {
        email,
        password,
    });

export const doRegister = ({ email, password, dateBirth, name }) =>
    axios.put("http://localhost:3001/user/register", {
        email,
        name,
        password,
        dateBirth
    });