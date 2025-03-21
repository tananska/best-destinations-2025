import { Navigate } from "react-router";
import { useLogout } from "../../api/authApi"

export default function Logout() {
    const { isLoggedOut } = useLogout();

    return isLoggedOut
        ? <Navigate to={"/"} />
        : (<div className="flex items-center justify-center min-h-screen">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>)
}