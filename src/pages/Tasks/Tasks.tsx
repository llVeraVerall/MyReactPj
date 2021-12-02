import React from 'react';
import {fetchList} from '../../api/fetchList';



const Tasks = () => {
    fetchList()
        .then()

    return (
        <div>
            <div className='title'>
                Task
            </div>
        </div>
    );
};


export default Tasks;