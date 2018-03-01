//deploy
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

//style
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss'

//store
const store = require('configureStore').configure();
const {addBio} = require('actions');
store.dispatch(addBio(false));
//components
import Page from 'Page';

store.subscribe(() => {
  let state = store.getState();
  console.log('New state', state);
});

ReactDOM.render(
    <Provider store={store}>
        <Page/>
    </Provider>,
  document.getElementById('app')
);



