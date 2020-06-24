import React from 'react';


export default class SetStateDemo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    async increment(){
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log(this.state.count);
        // })
        await this.setStateAsync({count:this.state.count+1})
        console.log(this.state.count);
    }

    setStateAsync(state){
        return new Promise((resolve) =>{
            this.setState(state,resolve)
        })
    }

    render() {
        return (
            <div>
                setState是同步还是异步的
                <p>{this.state.count}</p>
                <button onClick={this.increment.bind(this)}>按钮</button>
            </div>
        )
    }


}