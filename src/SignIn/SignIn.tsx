import React, {useCallback, useState} from 'react';
import InputArea from '../Registration/Input/Input';
import './SignIn.css';
import './media__signIn.css';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signin = useCallback(() => {
        fetch('https://ruprogrammer.ru/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                Email: email,
                Password: password
            })
        });}, [email, password]);
    return (
        <div className='signin'>
            <div className='signin__title'>Вход</div>
            <InputArea value={email} setValue={setEmail} type="text" placeholder="Email"/>
            <InputArea value={password} setValue={setPassword} type="password" placeholder="Пароль"/>
            <button onClick={signin}>Войти</button>
        </div>
    );
};


export default SignIn;