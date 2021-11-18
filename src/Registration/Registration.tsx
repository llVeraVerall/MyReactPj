import React, {useState} from 'react';
import InputArea from './Input/Input';
import './Registration.css';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <div className='reg__block'>
                <div className='reg__title'>Регистрация</div>
                <InputArea value={email} setValue={setEmail} type="text" placeholder="Email"/>
                <InputArea value={password} setValue={setPassword} type="password" placeholder="Пароль"/>
                <InputArea value={password} setValue={setPassword} type="password" placeholder=" Повторите пароль"/>
                <div className='reg__btn'>
                    <button>Зарегестрироваться</button>
                    <button>Уже есть аккаунт</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;