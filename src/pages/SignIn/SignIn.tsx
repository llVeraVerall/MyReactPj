import React, {useCallback, useState} from 'react';
import InputArea from '../../components/Input/Input';
import './SignIn.css';
import './media__signIn.css';
import {useDispatch} from 'react-redux';
import {addToken} from '../../store/actions/token';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const signin = useCallback(
        () => {
            if (!/.+@.+\..+/.test(email)) {
                setError('Email введен некорректно');
                setMessage('');
                return;
            }
            fetch('https://ruprogrammer.ru/api/users/login', {
                method: 'POST',
                body: JSON.stringify({
                    Email: email,
                    Password: password
                })
            })
                .then(() => {
                    setError('');
                    dispatch(addToken('some-token'));
                    window.location.href = '/';
                })
                .catch((err: string) => {
                    setError(err);
                    setMessage('');
                });
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