// import 'primeicons/primeicons.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';
// import '../../index.css';
// import ReactDOM from 'react-dom';

import React, { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
// import { Skeleton } from 'primereact/skeleton';
// import './DropdownDemo.css';

export const DropdownDemo = () => {

    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);


    let loadLazyTimeout = useRef(null);

    const plans = [
        { name: 'Premium', code: 'NY' },
        { name: 'Free', code: 'RM' },
    ];

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    },[]); // eslint-disable-line react-hooks/exhaustive-deps

    const onCityChange = (e) => {
        setSelectedPlan(e.value);
    }

    const onLazyLoad = (event) => {
        setLazyLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //imitate delay of a backend call
        loadLazyTimeout = setTimeout(() => {
            const { first, last } = event;
            const _lazyItems = [...lazyItems];

            for (let i = first; i < last; i++) {
                _lazyItems[i] = { label: `Item #${i}`, value: i };
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    }

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }

    return (
        <div className="dropdown-demo">
            <div className="card">
                <h5>Basic</h5>
                <Dropdown value={selectedPlan} options={plans} onChange={onCityChange} optionLabel="name" placeholder="Select a plan" />

            </div>
        </div>
    );
}
                
// const rootElement = document.getElementById("root");
// ReactDOM.render(<DropdownDemo />, rootElement);