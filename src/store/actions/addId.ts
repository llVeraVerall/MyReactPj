import {IAddIdAction} from './types';

export const addIdId = (element: number): IAddIdAction => ({
    type: 'ADD_ID',
    payload: element
});