import React from 'react';



export default class RefsForm extends React.Component{
    constructor(props){
        super(props)
        this.username = React.createRef()
        this.password = React.createRef()
    }

    clickHandler = (e) =>{
        const node = this.username.current
        alert(node.value)
        console.log(this.password.current.value);
        
    }
    render(){
        return(
            <div>
                <hr/>
                <input type="text" ref={this.username}/>
                <input type="text" ref={this.password}/>
                <button onClick={this.clickHandler}>提交</button>
            </div>
        )
    }
}