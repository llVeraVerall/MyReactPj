import React, {useEffect} from 'react';
import './Header.css';
import './media__header.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {IState} from '../../store/reducers/listEl';




const Header = () => {
    //достаем данные из стора
    const hasToken = useSelector((state: IState) => !!state.token);

    useEffect(() =>{
        const token = localStorage.getItem('token');
        if (token) {
            <Link to='/signin' className='logout'>Logout &#10144;</Link>;
        }
    }
    );
    return (
        <div className='header-wrapper'>
            <div className='header-title'>My Pj</div>
            {hasToken && (
                <Link to='/signin' className='logout'>Logout &#10144;</Link>
            )}
        </div>);
};

export default Header;