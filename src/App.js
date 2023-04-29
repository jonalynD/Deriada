import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Header />
    <ToastContainer position='top-center' />
  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/Add" component={AddEdit} />
        <Route  path="/update/:id" component={AddEdit} />
        <Route  path="/view/:id" component={View} />
        
        

      </Switch>
      </div>
      </BrowserRouter>
      
  );
}

export default App;
