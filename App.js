//Lucas Rankin

import logo from './logo.svg';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';


import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Accessories from './components/Accessories.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';

import TShirts from './components/TShirts.jsx';
import DressShirts from './components/DressShirts.jsx';
import Jerseys from './components/Jerseys.jsx';
import Outerwear from './components/Outerwear.jsx';
import PoloShirts from './components/PoloShirts.jsx';
import Sweatshirts from './components/Sweatshirts.jsx';
//items
import Item1 from './components/Item1.jsx';
import Item2 from './components/Item2.jsx';
import Item3 from './components/Item3.jsx';
import Item4 from './components/Item4.jsx';
import Item5 from './components/Item5.jsx';
import Item6 from './components/Item6.jsx';
import Item7 from './components/Item7.jsx';
import Item8 from './components/Item8.jsx';
import Item9 from './components/Item9.jsx';
import Item10 from './components/Item10.jsx';
import Item11 from './components/Item11.jsx';
import Item12 from './components/Item12.jsx';
import Item13 from './components/Item13.jsx';
import Item14 from './components/Item14.jsx';
import Item15 from './components/Item15.jsx';
import Item16 from './components/Item16.jsx';
import Item17 from './components/Item17.jsx';


function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component= {Home}/>
        <Route path ='/about' component= {About}/>
        <Route path ='/accessories' component = {Accessories}/>
        <Route path ='/shoppingcart' component = {ShoppingCart}/>

        <Route path ='/tshirts' component = {TShirts}/>
        <Route path ='/dressshirts' component = {DressShirts}/>
        <Route path ='/jerseys' component = {Jerseys}/>
        <Route path ='/outerwear' component = {Outerwear}/>
        <Route path ='/poloshirts' component = {PoloShirts}/>
        <Route path ='/sweatshirts' component = {Sweatshirts}/>

        <Route path ='/item1' component = {Item1}/>
        <Route path ='/item2' component = {Item2}/>
        <Route path ='/item3' component = {Item3}/>
        <Route path ='/item4' component = {Item4}/>
        <Route path ='/item5' component = {Item5}/>
        <Route path ='/item6' component = {Item6}/>
        <Route path ='/item7' component = {Item7}/>
        <Route path ='/item8' component = {Item8}/>
        <Route path ='/item9' component = {Item9}/>
        <Route path ='/item10' component = {Item10}/>
        <Route path ='/item11' component = {Item11}/>
        <Route path ='/item12' component = {Item12}/>
        <Route path ='/item13' component = {Item13}/>
        <Route path ='/item14' component = {Item14}/>
        <Route path ='/item15' component = {Item15}/>
        <Route path ='/item16' component = {Item16}/>
        <Route path ='/item17' component = {Item17}/>
      </div>
    </Router>
  );
}

export default App;
