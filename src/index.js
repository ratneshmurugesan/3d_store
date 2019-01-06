import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '../src/styles/app.css';
import { store } from './redux/store'
import App from './components/app.js'
import {
    animalCount,
    foodCount,
    furnitureCount,
    technologyCount,
    transportCount,
    natureCount
} from './redux/actions'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("index"));

