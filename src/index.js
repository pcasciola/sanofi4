import React from 'react';
import ReactDOM from 'react-dom';
import './packedTable.css';
import './index.css';
import App from './Components/App';
//import Scheduler from './Components/SchedulerAdolescent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
