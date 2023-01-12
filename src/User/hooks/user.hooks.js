import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { doLogin } from '../services';
import { doRegister } from '../services';

import { login } from '../store/user.store';

import { checkIfDataIsValid } from '../../utils/datacheck.utils';
import { checkIfRegisterDataIsValid } from '../../utils/datacheck.utils';

export const useUserHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmitLogin = async (email, password) => {
        if (!checkIfDataIsValid(email, password)) {
            alert('The email or password is not correct');

            return;
        }

        const userData = {
            email,
            password,
        };

        const result = await doLogin(userData);

        if (result.data) {
            dispatch(login(result.data));

            navigate('/');
        }
    };

    const onSubmitRegister = async (name, email, password, dateBirth, subscription) => {
        if (checkIfRegisterDataIsValid(name, email, password, dateBirth, subscription)) {
            alert('Something went wrong while trying to register with this data');

            return;
        }

        const registerData = {
            name,
            email,
            password,
            dateBirth,
            subscription,
        };

        const result = await doRegister(registerData);

        if (result.data) {
            navigate('/login');
        }
    };

    return { onSubmitLogin, onSubmitRegister };
};
