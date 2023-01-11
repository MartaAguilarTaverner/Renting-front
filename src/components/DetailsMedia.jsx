import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { Fieldset } from 'primereact/fieldset';
import { Button } from 'primereact/button';

import { getSerieById } from '../Serie/services';
import { getMovieById } from '../Movie/services';
import { watchMovie, watchSerie } from '../UserOrder/services';

const DetailsMedia = () => {
    const { id } = useParams();
    const location = useLocation();
    const token = useSelector((state) => state.user.token);
    const userId = useSelector((state) => state.user.id);
    const [mediaItem, setMediaItem] = useState({});

    const getMovie = useCallback(async () => {
        const result = await getMovieById(token, id);

        setMediaItem(result.data);
    }, [id, token]);

    const getSerie = useCallback(async () => {
        const result = await getSerieById(token, id);

        setMediaItem(result.data);
    }, [id, token]);

    useEffect(() => {
        if (location.pathname.includes('movies')) {
            getMovie();
        } else {
            getSerie();
        }
    }, [getMovie, getSerie, location.pathname]);

    const onWatch = async () => {
        if (location.pathname.includes('movie')) {
            await watchMovie(token, userId, id);
        } else {
            await watchSerie(token, userId, id);
        }
    };

    return (
        <div className="card">
            <h3>Info</h3>
            <Fieldset>
                <div>
                    <h2>{mediaItem.title}</h2>
                </div>
                <div>
                    <h5>{mediaItem.description}</h5>
                </div>
                <div>
                    <h5>{mediaItem.year}</h5>
                    <h5>{mediaItem.director}</h5>
                    <h5>{mediaItem.genre}</h5>
                    <h5>{mediaItem.minAge}</h5>
                    <h5>{mediaItem.rating}</h5>
                </div>
            </Fieldset>
            <Button icon="pi pi-play" label="watch" onClick={onWatch} />
        </div>
    );
};

export default DetailsMedia;
