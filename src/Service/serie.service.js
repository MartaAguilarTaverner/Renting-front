import axios from "axios";

export const getSerieList = (token) =>
    axios.get("http://localhost:3001/serie", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
