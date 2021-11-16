import React from 'react';
import './CrossIcon.css';

export const CrossIcon = ({ isOpened }: { isOpened: boolean }) => (
    <div className={`CrossIcon ${isOpened ? 'isOpened' : ''}`}>
        <span className="line-1"/>
        <span className="line-2"/>
        <span className="line-3"/>
    </div>
);
