import React from 'react';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import {addToken} from './store/actions/token';
import {useDispatch} from 'react-redux';


function App() {
    const dispatch = useDispatch();

    dispatch(addToken('some-token'));
    return (
        <div className="App">
            <Header/>
            <Nav/>
        </div>
    );
}

export default App;
