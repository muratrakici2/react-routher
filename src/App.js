
import './App.css';
import React from 'react';
import Nav from "./component/Nav"
import About from './component/About';
import Shop from './component/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetail from './component/ItemDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
        
      </div>
    </Router>

  );
}
const Home = () => (
  <div>
    <h2>Home Page</h2>
  </div>
)
export default App;
