import { useState } from "react";

export default function useAuthError(initialValue) {

    const [error, setError] = useState(initialValue);

    return [
        error,
        setError,
    ]
}