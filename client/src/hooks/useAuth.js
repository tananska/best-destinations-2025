import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { request } from "../utils/request";

export default function useAuth(){
        const authData = useContext(UserContext);
    
        const authorizationOptions = {
            headers: {
                'X-Authorization': authData.accessToken,
            }
        }

        return {
            ...authData,
            authorizationOptions,
        }
}