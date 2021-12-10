//тип любого экшона
import {getList} from './getId';

export interface IAction<T> {
    type: string;
    payload: T;
}

export interface IAddTokenAction extends IAction<string> {
    type: 'ADD_TOKEN';
}

export interface IAddListAction extends IAction<string[]> {
    type: 'ADD_LIST';
}

export interface IAddIdAction extends IAction<number> {
    type: 'ADD_ID';
}

export interface IDeleteElementAction extends IAction<number> {
    type: 'DELETE_EL';
}

export interface IUpdateListAction extends IAction<string[]> {
    type: 'UPDATE_LIST';
}

export interface IGetListAction extends IAction<string[]> {
    type: 'GET_LIST';
}

export type AllActions = IAddTokenAction | IAddListAction | IDeleteElementAction | IUpdateListAction | IAddIdAction | IGetListAction;