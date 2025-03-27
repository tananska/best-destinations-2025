import { useEffect } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {

    const login = async (email, password) => {
        const response = await request('POST', `${baseUrl}/login`, { email, password });

        if (!response.accessToken) {
            throw new Error(response.message);
        }

        return response;
    }

    return {
        login,
    }
}

export const useRegister = () => {

    const register = async (username, email, password) => {
        const response = await request('POST', `${baseUrl}/register`, { username, email, password });

        if (!response.accessToken) {
            throw new Error(response.message);
        }

        return response;
    }


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