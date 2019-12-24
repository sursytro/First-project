import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Counter from './Redux/counter/counter';
 import store from './Redux/store';
import {Provider} from "react-redux";



// ReactDOM.render(
// <Router><App/></Router> ,
//  document.getElementById('root')
//  );



 ReactDOM.render(
    <Provider store={store}>
      
        <Counter />
    </Provider>,
     document.getElementById('root')
     );
    
