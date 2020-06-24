
import React from 'react';


export default class StateComponent extends React.Component {

    /**
     * 组件中的状态：state
     * 在原生的操作页面元素的变化,都是修改Dom,操作Dom
     * 但是在React中,我们不推荐操作Dom,页面元素的改变使用State的状态进行处理
     * 如何使用state:
     * 1. 定义state状态
     * 2. 获取状态
     * 3. 修改状态
     */

    constructor(props) {
        super(props)
        this.state = {
            count: 10,
            flag:true
        }
    }
    // 增加count的值
    increment() {
        // 获取count的值
        let count = this.state.count;
        // 修改setState的值
        this.setState({
            // count: this.state.count += 1
            count: count += 1
        })
    }
    // 减少count的值
    decrement() {
        let count = this.state.count;
        this.setState({
            // count: this.state.count += 1
            count: count -= 1
        })
    }
    // 使用箭头函数
    clickHandler = () => {
        console.log(this);
        console.log('打印当前的sate的值', this.state.count);
    }
    change = () => {
        // 修改flag的值
        let flag = this.state.flag ? false : true
        // 更新state的值
        this.setState({
            flag: flag
        })
    }

    render() {

        let showView = this.state.flag ? 'true:真猴王' : 'false:假猴王'

        return (
            <div>
                <h3>组件的State</h3>
                <p>{this.state.count}</p>
                <button onClick={this.increment.bind(this)}>增加</button>
                <button onClick={this.decrement.bind(this)}>减少</button>
                <button onClick={this.clickHandler}>this的指向问题</button>
                <hr />
                <p>{showView}</p>
                <button onClick={this.change}>修改</button>
            </div>
        )
    }

}


