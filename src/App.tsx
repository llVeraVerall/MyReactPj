import React from 'react';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import {addToken} from './store/actions/token';
import {useDispatch} from 'react-redux';
import Registration from './Registration/Registration';
import {Route, Routes} from 'react-router-dom';
import Home from './Home/Home';
import Tasks from './Tasks/Tasks';
import SignIn from './SignIn/SignIn';





function App() {
    const dispatch = useDispatch();

    dispatch(addToken('some-token'));
    return (
        <div className="App">
            {/*<Header/>*/}
            {/*<Nav/>*/}
            <Registration />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/tasks' element={<Tasks />}/>
                <Route path='/signup' element={<Registration />}></Route>
                <Route path='/signin' element={ <SignIn /> }></Route>
            </Routes>
        </div>
    );
}

export default App;
