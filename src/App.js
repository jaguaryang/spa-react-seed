import React, {Component} from 'react';
import Nav from './component/nav/nav';
import Welcome from './component/welcome';
import Profile from './component/profile';
import Goods from './component/goods';
import './App.css';
import {Route} from 'react-router-dom';

require('./api/globle');

const LIST = [{
  text: 'home',
  url: '/'
}, {
  text: 'profile',
  url: '/profile'
}, {
  text: 'goods',
  url: '/goods'
}];


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav_bar">
          <Nav list={LIST}/>
        </div>
        <div className="conent">
          <Route path='/' component={Welcome} exact/>
          <Route path='/profile' component={Profile}/>
          <Route path='/goods' component={Goods}/>
        </div>
      </div>
    );
  }
}

export default App;
