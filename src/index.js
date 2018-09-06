import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/semantic-ui-css/semantic.min.css';
import HomepageLayout from './HomepageLayout';

ReactDOM.render(<HomepageLayout />, document.getElementById('root'));
registerServiceWorker();
