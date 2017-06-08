import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/materialize-css/bin/materialize.css';
import '../node_modules/materialize-css/bin/materialize';
import './index.css';


ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

