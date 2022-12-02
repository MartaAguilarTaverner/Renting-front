import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { useUserLoginHook } from "../hooks/user.hooks";

const UserLogin = () => {
    const { onSubmitLogin } = useUserLoginHook();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                        onClick={() => onSubmitLogin(email, password)}
                    />
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
