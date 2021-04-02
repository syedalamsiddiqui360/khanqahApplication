import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './components/home/home'
import Book from './components/book'
import About from './components/about'
 import List from './components/list/list'
 import Detail from './components/detail'
import Bayan from './components/bayan'
import Ashar from './components/ashar'
import Footer from './components/footer'
import Contact from './components/contact/contact'
import Navbar from './components/navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const data="faizan";
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact={true} path="/contact" component={Contact} />
          <Route exact={true} path="/book" component={Bayan} />
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/bayan" component={Bayan} />
          <Route exact={true} path="/ashar" component={Bayan} />
          <Route exact={true} path="/list" component={List} />
          <Route exact={true} path="/detail" component={Detail} /> 
          <Route exact={true} path="/" component={Home} />

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
