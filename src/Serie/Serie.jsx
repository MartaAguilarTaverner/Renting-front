import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import TableCardMedia from '../components/TableCardMedia/TableCardMedia';

import { getSerieList } from './services/serie.service';

const Serie = () => {
    const token = useSelector((state) => state.user.token);
    const [serieList, serSerieList] = useState([]);

    const getAllSeries = useCallback(async () => {
        const result = await getSerieList(token);

        serSerieList(result.data);
    }, [token]);

    useEffect(() => {
        getAllSeries();
    }, [getAllSeries]);

    return <TableCardMedia mediaList={serieList} type="series" />;
};

export default Serie;
