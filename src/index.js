import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App nestedProperty={{ propertyNotInPropTypes: true }} />, document.getElementById('root'));
registerServiceWorker();