import { useState } from "react";

export default function usePersistedState(initialValue) {

    const [state, setState] = useState(initialValue);

    return [
        state,
        setState,
    ]
}