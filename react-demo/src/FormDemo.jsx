import React from 'react';

export default class FormDemo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    handleSubmit = (e) => {
        // 组织表单数据进行提交
        e.preventDefault()
        alert(this.state.value)

    }

    onChangeHandler = (e) => {
        // 此时input中的value值通过的是state进行管理
        this.setState({
            value:e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>表单受控组件</h3>
                {/* // 如果使用该种方法,表示的是不能修改input中的值 */}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.onChangeHandler} />
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }

}

