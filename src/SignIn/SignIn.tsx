import React from 'react';
import InputArea from '../Registration/Input/Input';
import './SignIn.css';
import './media__signIn.css';

const SignIn = () => (
    <div className='signin'>
        <div className='signin__title'>Вход</div>
        <InputArea type="text" placeholder="Email"/>
        <InputArea type="password" placeholder="Пароль"/>
        <button>Войти</button>
    </div>
);

export default SignIn;