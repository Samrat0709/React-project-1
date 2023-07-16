import React from 'react'
//import ParentComponent from './components/ParentComponent';
import Product from './components/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Todolist from './components/Todolist';
import "./App.css"
const App = () => {
  return (
    <div>
       <h2>React Project : 01</h2>
      {/* <ParentComponent/>  */}
      <Product/>
      {/* <Todolist/> */}
    </div>
  );
};

export default App