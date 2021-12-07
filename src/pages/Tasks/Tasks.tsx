import React, {useEffect} from 'react';
import {fetchList} from '../../api/fetchList';
import {addList} from '../../store/actions/listEl';
import {useDispatch, useSelector} from 'react-redux';
import {IItem, IState} from '../../store/reducers/listEl';


const Tasks = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchList()
            .then((result) => result.json())
            .then((list) => dispatch(addList(list)));
    }, []);
    const list = useSelector((state: IState) => state.list ?? []);
    return (
        <div>
            <div className='title'>
                Task
            </div>
            <ul>
                {list.map((item: IItem, index: number) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};


export default Tasks;