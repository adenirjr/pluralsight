import React from 'react';
import ReactDOM from 'react-dom';

import StateAPI from 'state-api';
import App from 'components/App';

const store = new StateAPI(window.initialData);

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);