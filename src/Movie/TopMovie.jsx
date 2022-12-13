import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import TableCardMedia from "../components/TableCardMedia/TableCardMedia";

import { getTopMovies } from "./services/movie.service";

const TopMovie = () => {
    const token = useSelector((state) => state.user.token);
    const [movieList, setMovieList] = useState([]);

    const getAllTopMovies = useCallback(async () => {
        const result = await getTopMovies(token);

        setMovieList(result.data);
    }, [token]);

    useEffect(() => {
        getAllTopMovies();
    }, [getAllTopMovies]);

    return (
        <div>
            <TableCardMedia mediaList={movieList} />
        </div>
    );
};

export default TopMovie;
