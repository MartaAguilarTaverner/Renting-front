import { checkEmailRegexp } from "./regexp.utils";

export const checkIfDataIsValid = (email, password) => {
    let hasErrors = false;

    if (!email || !checkEmailRegexp || !password) {
        hasErrors = true;
    }

    return hasErrors;
};
