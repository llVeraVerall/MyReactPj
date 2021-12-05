import React, {useEffect} from 'react';
import {fetchList} from '../../api/fetchList';
import {addList} from '../../store/actions/listEl';
import {useDispatch, useSelector} from 'react-redux';
import {IItem} from '../../store/reducers/listEl';


const Tasks = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchList()
            .then((result) => result.json())
            .then((list) => dispatch(addList(list)));
    }, []);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const list = useSelector((state) => state.listEl.list ?? []);
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