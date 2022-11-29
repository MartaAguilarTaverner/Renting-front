import { useEffect, useState } from "react";

import { getMovieList } from "./services";

const Movie = () => {
    const [movieList, setMovieList] = useState([]);

    const getAllMovies = async () => {
        const result = await getMovieList();

        setMovieList(result.data);
    };

    useEffect(() => {
        getAllMovies();
    }, []);

    return (
        <>
            <div>This is Movies</div>
            {movieList.map((movie) => (
                <div>{movie.title}</div>
            ))}
        </>
    );
};

export default Movie;
