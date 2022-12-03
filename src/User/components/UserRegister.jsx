import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import React, {useEffect, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';

// const checkEmailRegexp = (email) =>
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

// // const checkRegisterDataIsValid = (email, password, name, dateBirth) => {
// //     let hasErrors = false;

// //     if (!email || !checkEmailRegexp || !password) {
// //         hasErrors = true;
// //     }
// //     else if () {
// //         hasErrors = true;
// //     }

// //     return hasErrors;
// // };


const UserRegister = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [dateBirth, setDateBirth] = useState("");

    const onSubmit = () => {};

////////////////////////////////////////////////////// Embedding dropdown menu related logic

    const DropdownDemo = () => {

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
    
        const onPlanChange = (e) => {
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
        };

////////////////////////////////////////////////////// Embedding dropdown menu related logic

    return (
        <div className="flex justify-content-center align-items-center">
            <div className="card">
                <h5 className="text-center">Register</h5>
                <div className="field">
                    <span className="p-float-label">
                        <InputText
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="name">Name</label>
                    </span>
                </div>
                <div className="field">
                    <span className="p-float-label">
                        <InputText
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                    </span>
                </div>
                <div className="field">
                    <span className="p-float-label">
                        <InputText
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                    </span> 


{/* Input intended to implement draft-dropdown as set forth in this folder */}

                {/* </div>
                <div className="field">
                    <span className="p-float-label">
                        <InputText
                            id="dateBirth"
                            value={dateBirth}
                            onChange={(e) => setDateBirth(e.target.value)}
                        />
                        <label htmlFor="dateBirth">Birth date</label>
                    </span>
                </div> */}

                <div className="dropdown-demo">
                    <div className="card">
                        <h5>Basic</h5>
                        <Dropdown value={selectedPlan} options={plans} onChange={onPlanChange} optionLabel="name" placeholder="Select a plan" />
                    </div>
                </div>

{/* Input intended to implement draft-dropdown as set forth in this folder */}

                <div className="field flex justify-content-center">
                    <Button
                        label="Submit"
                        className="mt-2 p-button-help justify-content-center"
                        onClick={onSubmit}
                    />
                </div>
            </div>
        </div>
        </div>
    );
};
};

export default UserRegister
