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