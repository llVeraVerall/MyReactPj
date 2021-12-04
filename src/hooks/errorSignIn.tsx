import {useState} from 'react';
import {addToken} from '../store/actions/token';
import {useDispatch} from 'react-redux';

export const errorSignIn = (apiMethod: (...args: string[]) => Promise<unknown>, successMessage: string) => {
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const call = (...args: string[]) => apiMethod(...args)
        .then(() => {
            setError('');
            dispatch(addToken('some-token'));
            window.location.href = '/';
        })
        .catch((err: string) => {
            setError(err);
            setMessage('');
        });
    return [call, message, error, setError] as const;
};