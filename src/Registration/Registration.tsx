import React, {useState, useCallback} from 'react';
import InputArea from './Input/Input';
import './Registration.css';
import './media__reg.css';
import { Link } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');

    const signUp = useCallback(
        () => {
            if(password1 !== password2) {
                setError('Ошибка');
                return;
            }
            fetch('https://ruprogrammer.ru/api/users/register',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        Email: email,
                        Password: password1
                    })
                })
                .then(() => {
                    alert('Подтвердите регистрацию. Перейдите по ссылке, высланной на почту.');
                    console.log('successfull');
                })
                .catch((err: string) => {
                    console.log(err);
                });
        }, [email, password1, password2]
    );

    return (
        <div>
            <div className='reg__block'>
                <div className='reg__title'>Регистрация</div>
                <InputArea value={email} setValue={setEmail} type="text" placeholder="Email"/>
                <InputArea value={password1} setValue={setPassword1} type="password" placeholder="Пароль"/>
                <InputArea value={password2} setValue={setPassword2} type="password" placeholder=" Повторите пароль"/>
                <div className='reg__btn'>
                    <button onClick={ signUp }>Зарегестрироваться</button>
                    <button><Link path='/signin'>Уже есть аккаунт</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Registration;