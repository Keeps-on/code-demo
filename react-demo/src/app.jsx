import React from 'react';
// 【注意】在入口文件index.js中已经引入了react-dom此时在组件中不需要重复引入
// import React from 'react-dom';

//#region 组件的使用;以及组件的嵌套;props复用

// 引入外部的组件
// import Home from './Home'
// // 实现props组件的复用
// import Nav from './nav'
// // 使用类的形式创建组件
// class App extends React.Component {

//     // 渲染函数
//     render() {

//         const navIndex = ["首页", "学习", "视频"]
//         const navCourse = ["node", "Java", "Python"]

//         return (
//             <div>
//                 <h1>Hello React Component</h1>
//                 <Home />
//                 {/* 创建多个导航栏 */}
//                 {/* 首页导航栏 */}
//                 <Nav nav={navIndex} title="首页导航" />
//                 {/* 课程导航栏 */}
//                 <Nav nav={navCourse} title="课程导航" />
//             </div>
//         )
//     }
// }
// export default App;
//#endregion

//#region state组件
// import StateComponent from './StateComponent';
// class App extends React.Component {
//     // 渲染函数
//     render() {

//         return (
//             <div>
//                 <h1>Hello React Component</h1>
//                 <StateComponent/>
//             </div>
//         )
//     }
// }
// export default App;
//#endregion


//#region 声明周期函数,并且通过App的组件修改子组件的title
// import ComponentLife from './ComponentLife'
// class App extends React.Component {

//     constructor(props){
//         super(props)
//         // 将state的title传递给ComponentLife组件
//         this.state = {
//             title:"文本"
//         }
//     }
//     clickChange = () => {
//         this.setState({
//             title:'文本2'
//         })
//     }
//     // 渲染函数
//     render() {

//         return (
//             <div>
//                 <h1>Hello React Component</h1>
//                 {/* 父级组件向子级附件传递数据以及点击事件 */}
//                 <ComponentLife title={this.state.title}/>
//                 {/* 在该组件中修改了子组件的数据 */}
//                 <button onClick={this.clickChange}>修改title</button>
//             </div>
//         )
//     }
// }
// export default App;
//#endregion


//#region 在子级组件中clickChanges的事件 子传父
import ComponentLife from './ComponentLife'
class App extends React.Component {

    constructor(props){
        super(props)
        // 将state的title传递给ComponentLife组件
        this.state = {
            title:"文本"
        }
    }
    clickChange = (data) => {
        this.setState({
            title:data
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
//#endregion