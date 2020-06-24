
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


        this.setState({
            count: this.state.count += 1
        })
    }

    clickChange = () => {
        //此时通过props执行父级的函数
        // clickChanges是组件的属性
        this.props.clickChanges('我是子组件的数据');

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
    componentDidMount() {
        console.log("componentDidMount");
    }
}

