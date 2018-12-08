import React from 'react';
import ReactDOM from 'react-dom';

import StoreContainer from './components/storeContainer'
import '../src/styles/app.css';
import {store} from '../src/redux/reduxStore'

const App = () => (
   <div>
   <h3>3D MODELS</h3>
   <StoreContainer/>
   </div>
);

const render = () => ReactDOM.render(<App />, document.getElementById("index"));
render();
store.subscribe(render);

