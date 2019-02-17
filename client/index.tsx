import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/View';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root'));
