import {useState} from 'react';


export const useApi = <T = unknown> (apiMethod: (...args: string[]) => Promise<T>, successMessage: string) => {
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const call = (...args: string[]) => apiMethod(...args)
        .then((res) => {
            setMessage(successMessage);
            setError('');
            return res;
        })
        .catch((err: string) => {
            setError(err);
            setMessage('');
            throw Error(err);
        });

    return [call, message, error, setError] as const;
};

