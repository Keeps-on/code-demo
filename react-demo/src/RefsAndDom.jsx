
import React from 'react';

export default class RefsAndDom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.HelloDiv = React.createRef(); // 绑定节点
    }

    componentDidMount() {
        console.log(this.HelloDiv);
        this.HelloDiv.current.style.color = "red";

    }
    render() {
        return (
            <div>
                Refs and DOM
                <div ref={this.HelloDiv}>
                    hello
                    </div>
            </div>
        )
    }



}