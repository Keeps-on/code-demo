import React from 'react';

import Home from './pages/Home'
import Mine from './pages/Mine'

// import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Nav from './components/Nav/'
import Ucenter from './pages/Ucenter'

import NotFound from './pages/NotFound'

import Demo from './pages/Demo'
import Shop from './pages/Shop'


/**
 * HashRouter:锚点连接 不会有处理
 * BrowserRouter：H5新特性 / history.push 如果上线之后,需要后台做一些重定向处理：重定向处理 404bug
 */
/**
 * /mine/ucenter 包含了 /mine
 * 
 */

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact={true} path='/' component={Home} ></Route>
          {/* <Route strict={true} exact={true} path='/mine' component={Mine} ></Route> */}
          <Redirect from='/hellomine' to='/mine' />
          {/* 当加上?的时候表示该参数可有可无,有了就可以读,没有就不会报404页面 */}
          <Route strict={true} exact={true} path='/mine/ucenter/:id?/:name?' component={Ucenter} ></Route>
          {/* <Route path='/demo' render={()=><div>hello demo</div>} ></Route> */}
          <Route path='/demo' render={(props) => <Demo {...props} name="你好" />} ></Route>
          {/* <Route component={NotFound}></Route> */}
          <Route path='/shop' component={Shop}></Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
