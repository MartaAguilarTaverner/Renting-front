import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";

import { getMovieList } from "./services";

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
        <>
            <div>This is Movies</div>
            {movieList.map((movie) => (
                <>
                    <div>{movie.title}</div>
                    <img src={movie.imgURL} width="150" alt={movie.title} />
                </>
            ))}
        </>
    );
};

export default Movie;
