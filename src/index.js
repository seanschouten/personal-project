import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter as Router} from 'react-router-dom'
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
<Provider store={store}>
<Router>
   <App />
</Router>
</Provider>,   
document.getElementById('root'));

