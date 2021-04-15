import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './styles/index.css'
import configureStore from './redux/store/store';
import rootReducer from './redux/reducers'

const { store, persistor } = configureStore();

ReactDOM.render(
    <App store={store} persistor={persistor}/>,
    document.getElementById('root'));
