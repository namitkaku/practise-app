import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Contact from './Contact';
import Menu from './Menu';
import Error from './Error';
import { Switch ,Route } from 'react-router-dom';
 
function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path='/'>
          <About />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
