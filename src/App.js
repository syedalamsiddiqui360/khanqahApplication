import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './components/home/home'
import Book from './components/book'
import About from './components/about'
// import List from './components/list/list'
 import Detail from './components/detail'
import Bayan from './components/bayan'
import Ashar from './components/ashar'
import Footer from './components/footer'
import Contact from './components/contact'
import Navbar from './components/navbar';



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const data="faizan";
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/book" component={Book} />
          <Route exact path="/about" component={About} />
          <Route exact path="/bayan" component={Bayan} />
          <Route exact path="/ashar" component={Ashar} />
          {/* <Route exact path="/list" component={List} />*/}
          <Route exact path="/detail" component={Detail} /> 
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
