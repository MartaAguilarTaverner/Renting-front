import axios from "axios";

export const getMovieList = () =>
    axios.get("http://localhost:3001/movie", {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibWFydGFhdEBnbWFpbC5jb20iLCJpYXQiOjE2Njk3NTUxODIsImV4cCI6MTY3MTE5NTE4Mn0.lZMBtHEh42x9mfbbaQn749YlYT0uV_FSbIrWn2yP5iM`,
        },
    });
