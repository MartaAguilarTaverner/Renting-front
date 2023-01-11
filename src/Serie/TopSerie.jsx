import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import TableCardMedia from '../components/TableCardMedia/TableCardMedia';

import { getTopSeries } from './services/serie.service';

const TopSerie = () => {
    const token = useSelector((state) => state.user.token);
    const [serieList, setSerieList] = useState([]);

    const getAllTopSeries = useCallback(async () => {
        const result = await getTopSeries(token);

        setSerieList(result.data);
    }, [token]);

    useEffect(() => {
        getAllTopSeries();
    }, [getAllTopSeries]);

    return <TableCardMedia mediaList={serieList} type="series" />;
};

export default TopSerie;
