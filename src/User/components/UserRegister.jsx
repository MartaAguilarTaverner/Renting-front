import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";

import "../UserGeneral.css";
export const FormRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthDate, setBirthDate] = useState(new Date());
    const [subscriptionOptions] = useState([
        {
            label: "Try Free 1 month",
            value: "try",
        },
        {
            label: "6 Months",
            value: "6m",
        },
        {
            label: "1 Year",
            value: "1y",
        },
    ]);
    const [subscription, setSubscription] = useState("");
    const [accept, setAccept] = useState();

    return (
        <div className="flex justify-content-center align-items-center register-container">
            <div className="card register-form">
                <h5 className="text-center register-text">Register</h5>
                <div className="field">
                    <span className="p-float-label w-full">
                        <InputText
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full"
                        />
                        <label htmlFor="name">name</label>
                    </span>
                </div>
                <div className="field mt-4">
                    <span className="p-float-label p-input-icon-right w-full">
                        <i className="pi pi-envelope" />
                        <InputText
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full"
                        />
                        <label htmlFor="email">Email</label>
                    </span>
                </div>
                <div className="field mt-4 w-full">
                    <span className="p-float-label w-full">
                        <Password
                            id="password"
                            className="w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Password*</label>
                    </span>
                </div>
                <div className="field mt-4">
                    <span className="p-float-label w-full">
                        <Calendar
                            id="birthDate"
                            className="w-full"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            dateFormat="dd/mm/yy"
                            mask="99/99/9999"
                            showIcon
                        />
                        <label htmlFor="date">Birthday</label>
                    </span>
                </div>
                <div className="subscription mt-4">
                    <span className="p-float-label w-full">
                        <Dropdown
                            id="subscription"
                            className="w-full"
                            value={subscription}
                            onChange={(e) => setSubscription(e.value)}
                            options={subscriptionOptions}
                        />
                        <label htmlFor="subscription">
                            Select Subscription Plan
                        </label>
                    </span>
                </div>
                <div className="field-checkbox mt-2">
                    <Checkbox
                        inputId="accept"
                        name="accept"
                        checked={accept}
                        onChange={(e) => setAccept(e.checked)}
                    />
                    <label htmlFor="accept">
                        I agree to the terms and conditions*
                    </label>
                </div>
                <div className="field flex justify-content-center">
                    <Button label="Submit" className="mt-2" />
                </div>
            </div>
        </div>
    );
};

export default FormRegister;
