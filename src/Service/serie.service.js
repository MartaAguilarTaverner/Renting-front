import axios from "axios";

export const getSerieList = (token) =>
    axios.get("http://localhost:3001/serie", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export const getTopSeries = (token) =>
    axios.get("http://localhost:3001/serie/toprating", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
