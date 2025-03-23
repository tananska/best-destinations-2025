import { useEffect } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {

    const login = (email, password) => request('POST', `${baseUrl}/login`, { email, password });

    return {
        login,
    }
}

export const useRegister = () => {

    const register = (email, password) => request('POST', `${baseUrl}/register`, { email, password });

    return {
        register,
    }
}

export const useLogout = () => {

    const { authorizationOptions, accessToken, userLogoutHandler } = useAuth();

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        request('GET', `${baseUrl}/logout`, null, authorizationOptions)
            .then(userLogoutHandler);
    }, [accessToken, userLogoutHandler])

    return {
        isLoggedOut: !!accessToken,
    }
}