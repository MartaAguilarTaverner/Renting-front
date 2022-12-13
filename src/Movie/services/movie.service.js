import axios from "axios";

export const getMovieList = (token) =>
    axios.get("http://localhost:3001/movie", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export const getTopMovies = (token) =>
    axios.get("http://localhost:3001/movie/toprating", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export const getMovieById = (token, id) =>
    axios.get(`http://localhost:3001/movie/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
