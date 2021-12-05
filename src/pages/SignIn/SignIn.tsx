import React, {useCallback, useState} from 'react';
import InputArea from '../../components/Input/Input';
import './SignIn.css';
import './media__signIn.css';
import {fetchSignin} from '../../api/fetchSignIn';
import {useApi} from '../../hooks/useApi';
import {addToken} from '../../store/actions/token';
import {useDispatch} from 'react-redux';
import {validateEmail} from '../../validators/validateEmail';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const [callFetch, message, error, setError] = useApi<Response>(
        (email: string, password: string) => fetchSignin (email, password),
        '');

    const signin = useCallback(
        () => {
            if (!validateEmail(email)) {
                setError('Email введен некорректно');
                return;
            }
            callFetch(email, password)
                .then((result) => result.json())
                .then(({ token }: {token: string}) =>{
                    dispatch(addToken(token));
                    //сохраненеие токена localStorage
                    localStorage.setItem('token', token);
                    window.location.href = '/';
                }
                );

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