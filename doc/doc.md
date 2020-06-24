
[toc]

## 常用快捷键
1. 配置代码块片段

## 工具环境配置
1. 构建工具:webpack:https://yunp.top/init/p/v/1
2. 安装node:npm: https://yunp.top.init/p/v/1
3. cnpm命令:http://npm.taobao.org/
4. 官方文档:https://reactjs.org/docs/hello-world.html
5. 配置本地npm源:npm install -g cnpm --registry=https://registry.npm.taobao.org

## 创建项目
npx create-react-app
cd react-demo
npm start

## 项目目录介绍
node_modules:所必须的npm安装包
public:入口文件
src:源码

## React的必备知识
### JSX简介
> JSX语法：JavaScript + XML语法(HTML),遇到尖角号(<>)使用Html解析,遇到{}使用JavaScript

### 元素渲染

```jsx
function tick() {

  const element = (
    < div >
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div >
  )
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```
### 组件
index.js
```
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx';
ReactDOM.render(<App />, document.getElementById('root'));

```
app.jsx
```
import React from 'react';
// 【注意】在入口文件index.js中已经引入了react-dom此时在组件中不需要重复引入
// import React from 'react-dom';


// 使用类的形式创建组件
class App extends React.Component{

    // 渲染函数
    render(){
        return (
            <h1>Hello React Component</h1>
        )
    }
}
export default App;

```
---
#### 组件之间的相互引用
```home.jsx
import React from 'react';

export default class Home extends React.Component {
    render(){

        return (
            <div>
                <h1>This is Home!!!</h1>
            </div>
        )
    }
}
```
在app.jsx中引用
```
import React from 'react';
// 【注意】在入口文件index.js中已经引入了react-dom此时在组件中不需要重复引入
// import React from 'react-dom';

// 引入外部的组件
import Home from './Home'
// 使用类的形式创建组件
class App extends React.Component{

    // 渲染函数
    render(){
        return (
            <div>
            <Home/>
            <h1>Hello React Component</h1>
            </div>
        )
    }
}
export default App;

```
### props属性
> 组件的复用性,使用props进行数据渲染
> 需求：对一个Nav传入不同的数据,实现不同的导航栏的复用
step-1：创建Nav导航栏组件
```
import React from 'react';
export default class Nav extends React.Component {
    render() {
        // 接收传入的props
        console.log(this.props.nav);
        const nav = this.props.nav;
        return (
            <div>
                <ul>
                    {/* {nav.map(item => <li key={item}>{item}</li>)} */}
                    {
                        nav.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
```
step-2:在组件app.jsx中引用nav.jsx组件
> 引用过程中传入了多个数据
```
import Nav from './nav'
// 使用类的形式创建组件
class App extends React.Component {
    // 渲染函数
    render() {
        const navIndex = ["首页","学习","视频"]
        const navCourse = ["node","Java","Python"]
        return (
            <div>
                <h1>Hello React Component</h1>
                <Home />
                {/* 创建多个导航栏 */}
                {/* 首页导航栏 */}
                <Nav nav={navIndex}/>
                {/* 课程导航栏 */}
                <Nav nav={navCourse}/>
            </div>
        )
    }
}
export default App;
```
【注意】：Props不能修改


### 事件的处理
1. this
2. 向事件处理程序传递参数

Home.jsx
```
import React from 'react';

export default class Home extends React.Component {
    
    constructor(props){
        super(props);
        // 初始化方法
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(element,event){
        // console.log(this);
        console.log(element,event);
        
    }
    render(){
        const names = ["kevin","lee"];
        return (
            <div>
                <h1>Home组件的复用</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>按钮</button> */}
                {/* 使用初始化函数进行绑定this */}
                {/* <button onClick={this.clickHandler}>按钮</button> */}
                {/* 使用箭头函数进行绑定this */}
                {/* <button onClick={(e) => this.clickHandler(e)}></button> */}
                <ul>
                    {
                        names.map((element,index) =>{
                            // return <li onClick={this.clickHandler.bind(this,element)} key={index}>{element}</li>
                            return <li onClick={(e) => this.clickHandler(element,e)} key={index}>{element}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
```

### React中的声明周期函数

函数列表：
```
start

getDefaultProps

getinitialState

componentWillMount    :在组件渲染之前执行
    render -- 组件渲染
componentDidMount     :在组件渲染之后执行

shouldComponentUpdate : true/false true代表允许改变 false代表不允许改变
        |true
componentWillUpdate   :数据在改变之前执行(props,state)
    render -- 组件渲染
componentDidUpdate    :数据修改完成(props,state)
componentWillReceiveProps: props发生改变执行
cpmponentWillUnmount:组件卸载前执行
```

### React中父子之间的通信

#### 父级向子级传递
> 案例执行过程:在app.jsx的组件中定义state的属性title,并且将该属性传递给ComponentLife的组件
> 在ComponentLife组件中通过`<ComponentLife title={this.state.title}/>`进行接受父组件传递的数据
> 在父组件中通过定义修改函数修改子组件的内容`<button onClick={this.clickChange}>修改title</button>`
app.jsx
```
import ComponentLife from './ComponentLife'
class App extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
            title:"文本"
        }
    }
    clickChange = () => {
        this.setState({
            title:'文本2'
        })
    }
    // 渲染函数
    render() {

        return (
            <div>
                <h1>Hello React Component</h1>
                {/* 父级组件向子级附件传递数据以及点击事件 */}
                <ComponentLife title={this.state.title}/>
                <button onClick={this.clickChange}>修改title</button>
            </div>
        )
    }
}
export default App;
```
ComponentLife.jsx
```
import React from 'react';

export default class ComponentLife extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 10
        }
    }
    componentWillMount() {
        console.log("componentWillMount");
    }
    shouldComponentUpdate() {
        console.log('修改会立即执行');
        return true;
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    componentWillReceiveProps() {
        console.log("componentWillReceiveProps");

    }
    componentWillUpdate() {
        console.log('修改的时候执行');
        console.log("componentWillUpdate");
    }

    changeHandler = () => {
        this.setState ({
            count: this.state.count += 1
        })
    }
    render() {
        // 结构复制
        const { count } = this.state
        return (
            <div>
                {/* 声明周期函数{this.state.count},在该组件中接受父组件传递的数据 */}
                声明周期函数{count} - {this.props.title}
                <button onClick={this.changeHandler}>按钮</button>
            </div>
        )
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
}
```

#### 子级向父级传递
> 执行过程该过程的非常重要的一个点是使用props将函数通过属性传递给子组件`<ComponentLife title={this.state.title} clickChanges={this.clickChange}/>`
> 在ComponentLife组件中`<button onClick={this.clickChange}>修改title</button>`绑定事件,在`this.clickChange`中最重要的一点是
使用props接受了传递的函数然后调用`this.props.clickChanges();`
app.jsx
```
import ComponentLife from './ComponentLife'
class App extends React.Component {

    constructor(props){
        super(props)
        // 将state的title传递给ComponentLife组件
        this.state = {
            title:"文本"
        }
    }
    clickChange = () => {
        this.setState({
            title:'文本2'
        })
    }
    // 渲染函数
    render() {

        return (
            <div>
                <h1>Hello React Component</h1>
                {/* 父级组件向子级附件传递数据以及点击事件 */}
                <ComponentLife title={this.state.title} clickChanges={this.clickChange}/>
            </div>
        )
    }
}
export default App;

```
ComponentLife.jsx
```
    clickChange = () => {
        //此时通过props执行父级的函数
        // clickChanges是组件的属性
        this.props.clickChanges();

    }

    render() {
        // 结构复制
        const { count } = this.state
        return (
            <div>
                {/* 声明周期函数{this.state.count},在该组件中接受父组件传递的数据 */}
                声明周期函数{count} - {this.props.title}
                <button onClick={this.changeHandler}>按钮</button>
                <button onClick={this.clickChange}>修改title</button>
            </div>
        )
    }

```

### setState是同步还是异步
1. setState会引起视图的重绘
2. 在可控的情况下是异步,在非可控的情况下是同步

### 条件渲染

### 列表 & key
1. 如果数据索引没有变化,则ui不会重绘,只有发生变化才会重绘,这样才能达到一个节省资源,加快渲染速度的作用

### 表单受控组件
1. 受控组件：表单中的value的值是通过state的状态进行管理
2. 非受控组件：表示表单中的

### RefsAndDom
1. 管理焦点,文本选择或媒体播放
2. 触发强制动画
3. 集成第三方DOM库

### 状态提升
组件之间的数据交互


### 组件 VS 继承

### 使用 PropTypes 进行类型检查
增强程序的健壮性
1. 类型验证
2. 必选项验证
3. 默认值的验证