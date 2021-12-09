import {addToken} from '../../store/token';
import {useDispatch} from 'react-redux';

const dispatch = useDispatch();

export const handleAuthError = (respons: Response) => {
    if(respons.status == 401) {
        dispatch(addToken(''));
        localStorage.removeItem('token', token);
        window.location.href = '/signin';
    }
};