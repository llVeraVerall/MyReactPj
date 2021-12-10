import { IUpdateListAction} from './types';

export const updateList = (list: string[]): IUpdateListAction => ({
    type: 'UPDATE_LIST',
    payload: list
});