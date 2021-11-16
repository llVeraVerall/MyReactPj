import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers';
import {createStore} from 'redux';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>,
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


