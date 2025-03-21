import { createContext } from "react";


export const UserContext = createContext({
    _id: '',
    username: '',
    email: '',
    accesToken: '',
    userLoginHandler: () => null,
})