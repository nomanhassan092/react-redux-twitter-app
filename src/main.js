import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './twitterstream';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
