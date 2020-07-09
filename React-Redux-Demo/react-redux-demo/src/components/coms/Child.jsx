import React from 'react'

export default class Child extends React.Component {


    clickHandle = () => {
        this.props.onMyenve("副标题");
    }

    render() {
        const { title } = this.props
        return (
            <div>
                Child:{this.props.title}
                {title}
                <button onClick={this.clickHandle}>传递数据</button>
            </div>
        )
    }
}