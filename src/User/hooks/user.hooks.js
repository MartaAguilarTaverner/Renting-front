import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { doLogin } from "../services";

import { login } from "../store/user.store";

import { checkIfDataIsValid } from "../../utils/datacheck.utils";

export const useUserLoginHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmitLogin = async (email, password) => {
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

    return { onSubmitLogin };
};
