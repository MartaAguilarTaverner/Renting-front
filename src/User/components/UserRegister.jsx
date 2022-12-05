import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { CalendarDemo } from "../hooks/calendar.hooks"

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
    const { onSubmitCalendar } = CalendarDemo();


    const onSubmit = () => {};

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
                </div>
                
                {/* <div className="field">
                    <span className="p-float-label">
                        <InputText
                            id="dateBirth"
                            value={dateBirth}
                            onChange={(e) => setDateBirth(e.target.value)}
                        />
                        <label htmlFor="dateBirth">Birth date</label>
                    </span>
                </div> */}

                <div className="p-fluid grid formgrid">
                    <div className="field col-12 md:col-4">
                        <label htmlFor="basic">Basic</label>
                        <Calendar onChange={(e) => onSubmitCalendar(e.value)} />
                    </div>
                </div>
                <div className="field flex justify-content-center">
                    <Button
                        label="Submit"
                        className="mt-2 p-button-help justify-content-center"
                        onClick={onSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default UserRegister;
