import {useState} from 'react';


export const useApi = (apiMethod: (...args: string[]) => Promise<unknown>, successMessage: string) => {
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const call = (...args: string[]) => apiMethod(...args)
        .then(() => {
            setMessage(successMessage);
            setError('');
        })
        .catch((err: string) => {
            setError(err);
            setMessage('');
        });

    return [call, message, error, setError] as const;
};

