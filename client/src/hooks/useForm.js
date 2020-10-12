// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initialState, submit) => {
    const [state, setState] = useState(initialState);

    const handleChanges = (e) => {
        e.persist();
        setState((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(handleChanges)
    };

    return [state, handleChanges, handleSubmit];
};

export default useForm;