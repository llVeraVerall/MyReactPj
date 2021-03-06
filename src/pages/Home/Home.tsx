import React from 'react';
import './Home.css';
import './media__home.css';
import {useSelector} from 'react-redux';


const Home = () => (
    <div>
        <div className='title'>
            <div className='title_header'>Home</div>
        </div>
        <div className='block'>
            <div className='days'><h4>Days</h4>
                <div className='icon'>img</div>
                <div className='limit'>limit</div>
                <div className='count'>25</div>
            </div>
            <div className='tasks'><h4>Tasks</h4>
                <div className='icon'>img</div>
                <div className='limit'>limit</div>
                <div className='count'>70</div>
            </div>
        </div>
    </div>
);

export default Home;