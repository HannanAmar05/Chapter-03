import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from '../src/Home.js'
// import {AddTodo} from '../src/AddTodo.js'
// import {Tampilan} from '../src/Tampilan.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home></Home>
  </React.StrictMode>
);

