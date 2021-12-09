import {IGetListAction} from './types';

export const getList = (list: string[]): IGetListAction => ({
    type: 'GET_LIST',
    payload: list
});