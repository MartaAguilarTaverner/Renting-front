import { checkEmailRegexp } from './regexp.utils';
import { checkMaxLength, checkMinLength } from './string.utils';

export const checkIfDataIsValid = (email, password) => {
    let hasErrors = false;

    if (!email || !checkEmailRegexp(email) || !password) {
        hasErrors = true;
    }

    return hasErrors;
};

const checkIfNameIsValid = (name) => !checkMaxLength(30, name) || !checkMinLength(5, name);

export const checkIfRegisterDataIsValid = (name, email, password, birthDate, subscription) => {
    let hasErrors = false;

    hasErrors = checkIfNameIsValid(name);

    hasErrors = checkEmailRegexp(email);

    hasErrors = !password;

    hasErrors = !(birthDate instanceof Date);

    hasErrors = !subscription;

    return hasErrors;
};
