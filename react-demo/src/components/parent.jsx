import React from 'react';
import Child1 from './child1'
import Child2 from './child2'
export default class Parent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            money:7
        }
    }
    changeHandler(e){
        this.setState({
            money:e.target.value
        })
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.money} onChange={this.changeHandler.bind(this)} />
                Parent
                <hr/>
                人民币：<Child1 money={this.state.money}/>
                美元：<Child2 money={this.state.money}/>
            </div>
        )
    }

}