import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from '../client/components/App/View';

const client = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

export default client;