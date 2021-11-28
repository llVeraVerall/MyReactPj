import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './pages/Nav/Nav';
import {addToken} from './store/actions/token';
import {useDispatch} from 'react-redux';
import Registration from './pages/Registration/Registration';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Tasks from './pages/Tasks/Tasks';
import SignIn from './pages/SignIn/SignIn';

function App() {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    if (token) {
        dispatch(
            addToken(token));
    }
    return (
        <div className="App">
            <Header />
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tasks' element={<Tasks />}/>
                <Route path='/signup' element={<Registration/>}/>
                <Route path='/signin' element={<SignIn/>}/>
            </Routes>
        </div>
    );
}

export default App;
