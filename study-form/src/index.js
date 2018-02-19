import React from 'react';
import ReactDOM from 'react-dom';
import StudyForm from './components/StudyForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StudyForm />, document.getElementById('main-content'));
registerServiceWorker();
