import React from 'react'
import { withRouter } from 'react-router-dom'
/**
 * 
 */
// export default class MineDemo extends React.Component {
class MineDemo extends React.Component {

    clickHandle = () => {
        console.log(this.props);
        // 该按钮会在所有的入口渲染文件中看到,所以会被返回
        this.props.history.push('/')

    }
    // 当前对象没有被路由直接管理,所以没有路由对象,所谓的不是非路由组件就是没有用Roter包含的组件

    render() {
        return (
            <div>
                {/* 该按钮会被所有的按钮看到 */}
                <button onClick={this.clickHandle}>回到home</button>
            </div>
        )
    }
}


export default withRouter(MineDemo)