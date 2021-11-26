import React, {useCallback, useState} from 'react';
import InputArea from '../../components/Input/Input';
import './SignIn.css';
import './media__signIn.css';
import {errorSignIn} from '../../hooks/errorSignIn';
import {fetchSignin} from '../../api/fetchSignIn';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [callFetch, message, error, setError] = errorSignIn(
        (email: string, password: string) => fetchSignin (email, password),
        '');

    const signin = useCallback(
        () => {
            if (!/.+@.+\..+/.test(email)) {
                setError('Email введен некорректно');
                return;
            }
            callFetch(email, password);

        }, [email, password]
    );

    return (
        <div className='signin'>
            <div className='signin__title'>Вход</div>
            <InputArea value={email} setValue={setEmail} type="text" placeholder="Email"/>
            <InputArea value={password} setValue={setPassword} type="password" placeholder="Пароль"/>
            {error && (
                <div className='reg__error'>{error}</div>
            )}
            {message && (
                <div className='reg__message'>{message}</div>
            )}
            <button onClick={signin}>Войти</button>
        </div>
    );
};


export default SignIn;