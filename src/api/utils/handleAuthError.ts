import {addToken} from '../../store/actions/token';
import {store} from '../../index';


export const handleAuthError = (respons: Response) => {
    if(respons.status == 401) {
        logOut();
    }
};

export const logOut = () => {
    store.dispatch(addToken(''));
    localStorage.removeItem('token');
    window.location.href = '/signin';
};