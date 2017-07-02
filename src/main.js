import React from 'react';
import ReactDOM from 'react-dom';
import Twitterstream from './twitterstream';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
 
 const store=configureStore();


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
       <Twitterstream />
    </Provider>,
    document.getElementById('mount')
  );
});
