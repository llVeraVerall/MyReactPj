import React from 'react';
import './Input.css';

const InputArea = (props :any) => (
    <div>
        <input onChange={(event) => props.setValue(event.target.value)}
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}
            className='input__item'/>
    </div>
);

export default InputArea;