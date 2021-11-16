import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import Store from './store';

const StoreInstance = Store();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={StoreInstance}>
            <App/>
        </BrowserRouter>
    </Provider>,
</React.StrictMode>,
document.getElementById('root')
);


