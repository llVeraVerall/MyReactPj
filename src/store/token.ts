import {IAddTokenAction} from './actions/types';

export const addToken = (token: string): IAddTokenAction => ({
    type: 'ADD_TOKEN',
    payload: token
});