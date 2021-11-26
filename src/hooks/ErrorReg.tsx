import {useState} from 'react';


const useApi = (apiMethod: () => Promise<unknown>, successMessage: string) => {
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const call = () => apiMethod()
        .then(() => {
            setMessage(successMessage);
            setError('');
        })
        .catch((err: string) => {
            setError(err);
            setMessage('');
        });

    return [call, message, error];
};