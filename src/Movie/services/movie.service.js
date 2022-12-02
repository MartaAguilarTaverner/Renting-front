import axios from "axios";

export const getMovieList = (token) =>
    axios.get("http://localhost:3001/movie", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
