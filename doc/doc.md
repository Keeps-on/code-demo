
## 常用快捷键


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
