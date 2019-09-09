import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import settings from './settings';

fetch(`${settings.api_url}/ingredients`)
.then(res => res.json())
.then(res => {
    if (res.success) {
        window.updateData(res.results);
    } else {
        alert('Error fetching the data');
    }
})
.catch(e => {
    alert('No internet connection or cannot contact API. ' + e);
});

window.data = {};
window.updateData = function (data) {
    window.data = {};
    data.forEach(d => window.data[d.ID] = d);

    window.onUpdateDataCallbacks.forEach(fn => {
        fn();
    });
}
window.onUpdateData = function (fn) {
    window.onUpdateDataCallbacks.push(fn);
}
window.onUpdateDataCallbacks = [];
window.userHash = sessionStorage.getItem('userHash');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
