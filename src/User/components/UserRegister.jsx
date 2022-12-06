import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
//import { throwUnexpectedConfigError } from "@craco/craco";

export const FormRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthDate, setBirthDate] = useState(new Date());
    const [subscriptionOptions, setSubscriptionOptions] = useState([
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
        <div className="flex justify-content-center">
            <div className="card">
                <h5 className="text-center">Register</h5>
                <form className="p-fluid">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor="name">name</label>
                        </span>
                    </div>
                    <div className="field">
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-envelope" />
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
                            <Password
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="password">Password*</label>
                        </span>
                    </div>
                    <div className="field">
                        <span className="p-float-label">
                            <Calendar
                                id="birthDate"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                dateFormat="dd/mm/yy"
                                mask="99/99/9999"
                                showIcon
                            />
                            <label htmlFor="date">Birthday</label>
                        </span>
                    </div>
                    <div className="subscription">
                        <span className="p-float-label">
                            <Dropdown
                                id="subscription"
                                value={subscription}
                                onChange={(e) => setSubscription(e.value)}
                                options={subscriptionOptions}
                            />
                            <label htmlFor="subscription">
                                Select Subscription Plan
                            </label>
                        </span>
                    </div>
                    <div className="field-checkbox">
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
                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </div>
        </div>
    );
};

export default FormRegister;
