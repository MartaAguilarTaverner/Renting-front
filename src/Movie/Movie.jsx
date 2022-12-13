import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";

import TableCardMedia from "../components/TableCardMedia/TableCardMedia";

import { getMovieList } from "./services";

import "./";

const Movie = () => {
    const token = useSelector((state) => state.user.token);
    const [movieList, setMovieList] = useState([]);

    const getAllMovies = useCallback(async () => {
        const result = await getMovieList(token);

        setMovieList(result.data);
    }, [token]);

    useEffect(() => {
        getAllMovies();
    }, [getAllMovies]);

    return (
        <div className="page-movies-main">
            <TableCardMedia mediaList={movieList} type="movies" />
        </div>
    );
};

export default Movie;
