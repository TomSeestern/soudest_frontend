import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import SimpleMap from './components/simplemap';

ReactDOM.render(
   // <App />, document.getElementById('root')
    <div style={{width: '400px', height: '400px'}}>
        <SimpleMap/>
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();