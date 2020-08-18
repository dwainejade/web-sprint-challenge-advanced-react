// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initialState) => {
    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
        e.persist();
        setState((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    return [state, handleChange];
};

export default useForm;