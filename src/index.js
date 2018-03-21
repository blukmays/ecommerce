import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import Store from './Store'
import Routes from './00-Routes'


const Wrapped = (
    <Provider store={Store}>
        <Router>
            <Routes />
        </Router>
    </Provider>
)



ReactDOM.render(Wrapped, document.getElementById('root'))
registerServiceWorker()
