import request from "../utils/request";

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {

    const login = async (email, password) => {
        const result = await request.post(`${baseUrl}/login`, { email, password });

        return result;
    }

    return {
        login,
    }
}

export const useRegister = () => {

    const register = async (authData) => {
        const accesToken = await request.post(`${baseUrl}/register`, { ...authData });

        return accesToken;
    }

    return {
        register,
    }
}