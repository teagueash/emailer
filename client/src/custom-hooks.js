import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * hook providing input logic to form component
 * @param  {String} [initialValue=''] user input
 * @return {Object}                   input value property and a method to change input
 */
export const useInputValue = (initialValue = '') => {
    const [inputValue, setInputValue] = useState(initialValue);

    return {
        inputValue,
        changeInput: e => {
            setInputValue(e.target.value);
        },
    };
};

/**
 * Hook that makes an API call to register the user with the provided email
 * @return {Object} Object with two properties, a flag that signals a
 *                  view change and function to trigger the view change
 */
export const useRegistration = () => {
    const [user, setUser] = useState('');
    const [isError, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [flag, setFlag] = useState(false);

    useEffect(
        () => {
            if (user !== '') {
                const registerUser = async user => {
                    try {
                        await axios.post('/register', {
                            email: user,
                        });
                        setFlag(true);
                    } catch (error) {
                        const { message } = error.response.data;
                        setError(true);
                        setErrorMsg(message);
                    }
                };
                registerUser(user);
            }
        },
        [user]
    );

    const doRegister = user => {
        setUser(user);
    };

    return {
        flag,
        isError,
        errorMsg,
        doRegister,
    };
};
