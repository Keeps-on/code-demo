

Redux
    参考地址：http://cn.redux.js.org/index.html

    基础知识:
        React中,状态数据,state
        组件与组件之间可以传递数据
            props    : 由上自下
            回传事件  : 由下自上
        兄弟之间组件传递数据：共同的子元素或者共同的父元素(大量的组件需要同一条数据)
    redux和react-redux的区别
        redux:js的状态管理： createStore
        react-redux:为了在react中容易的使用 connect provider
    安装
        npm install --save-dev redux
        npm install --save-dev react-redux