import axios from "axios";

export const getAllUserOrders = (token) =>
    axios.get("http://localhost:3001/userorders", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export const watchMovie = (token, userId, movieId) =>
    axios.post(
        "http://localhost:3001/userorders/movie",
        {
            userId,
            movieId,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

export const watchSerie = (token, userId, serieId) =>
    axios.post(
        "http://localhost:3001/userorders/serie",
        {
            userId,
            serieId,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
