import React from 'react'
import Child from './Child'

export default class Parent extends React.Component {

    state = {
        value: ""
    }

    clickHandle = (data) => {
        console.log(data);
        this.setState({
            value: data
        })
    }

    render() {
        return (
            <div>
                Parent:{this.state.value}
                <Child title={'标题一'} onMyenve={this.clickHandle} />
            </div>
        )
    }
}