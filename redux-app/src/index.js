import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducer from './reducer';
import * as actions from './actions';
import Counter from './components/counter';
import App from './components/app';


const store = createStore(reducer);
console.log(store);
const {dispatch} = store;


// native npm-redux func
// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

//actions from file actions.js
// actions = {
//   inc: inc,
//   dec: dec,
//   rnd: rnd
// }

// 


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));
