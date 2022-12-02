import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { doLogin } from "../services";

import { login } from "../store/user.store";

const checkEmailRegexp = (email) =>
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const checkIfDataIsValid = (email, password) => {
    let hasErrors = false;

    if (!email || !checkEmailRegexp || !password) {
        hasErrors = true;
    }

    return hasErrors;
};

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async () => {
        if (checkIfDataIsValid(email, password)) {
            alert("The email or password is not correct");

            return;
        }

        const userData = {
            email,
            password,
        };

        const result = await doLogin(userData);

        if (result.data) {
            dispatch(login(result.data));

            navigate("/");
        }
    };

    return (
        <div className="flex justify-content-center align-items-center">
            <div className="card">
                <h5 className="text-center">Login</h5>
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

export default UserLogin;
