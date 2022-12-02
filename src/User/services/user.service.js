import axios from "axios";

export const doLogin = ({ email, password }) =>
    axios.post("http://localhost:3001/user/login", {
        email,
        password,
    });
