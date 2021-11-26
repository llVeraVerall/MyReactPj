import React, { useState, useCallback } from 'react';
import InputArea from '../../components/Input/Input';
import './Registration.css';
import './media__reg.css';
import { Link } from 'react-router-dom';
import FetchReg from '../../api/fetch__reg';
import useApi from '../../hooks/ErrorReg';


const Registration = () => {
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const signUp = useCallback(
        () => {
            if (password1 !== password2) {
                setError('Пароли не совпадают');
                return;
            }
            FetchReg(email, password1)
                .then(() => {
                    setMessage('Подтвердите регистрацию. Перейдите по ссылке, высланной на почту.');
                    setError('');
                })
                .catch((err: string) => {
                    setError(err);
                    setMessage('');
                });
        }, [email, password1, password2]
    );

    const [callFetch, message, error] = useApi(() => fetchReg(email, password1));

    return (
        <div>
            <div className='reg__block'>
                <div className='reg__title'>Регистрация</div>
                <InputArea value={email} setValue={setEmail} type="text" placeholder="Email" />
                <InputArea value={password1} setValue={setPassword1} type="password" placeholder="Пароль" />
                <InputArea value={password2} setValue={setPassword2} type="password" placeholder=" Повторите пароль" />
                {error && (
                    <div className='reg__error'>{error}</div>
                )}
                {message && (
                    <div className='reg__message'>{message}</div>
                )}

                <div className='reg__btn'>
                    <button onClick={signUp}>Зарегестрироваться</button>
                    <button><Link to='/signin'>Уже есть аккаунт</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Registration;