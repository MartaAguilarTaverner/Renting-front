const MovieCarouselItem = (movie) => (
    <div>
        <div>
            <img src={movie.imgURL} alt="Movie IMG" className="movie" />
        </div>
    </div>
);

export default MovieCarouselItem;
