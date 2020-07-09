import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux'
import reducer from './reducers/counter'
import {Provider} from 'react-redux'

//#region 基础使用
// 创建仓库
const store = createStore(reducer)
// // 监听数据
// store.subscribe(() => console.log("state:", store.getState()))

// const render = () => {
//   ReactDOM.render(<App
//     onIncrement={() => store.dispatch({ type: "INCREMENT" })} // 向父组件传递数据就是将参数定义传入
//     onDecrement={() => store.dispatch({ type: "DECREMENT" })} // 向父组件传递数据就是将参数定义传入
//     value={store.getState()}
//   />, document.getElementById('root'));
// }
// render()
// store.subscribe(render)
//#endregion


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));

  // onIncrement={() => store.dispatch({ type: "INCREMENT" })} // 向父组件传递数据就是将参数定义传入
  // onDecrement={() => store.dispatch({ type: "DECREMENT" })} // 向父组件传递数据就是将参数定义传入
  // // value={store.getState()}

/**
 *
 *
 *
 *
 *
 */