
import React from 'react';

export default class Home extends React.Component {
    
    constructor(props){
        super(props);
        // 初始化方法
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(element,event){
        // console.log(this);
        console.log(element,event);
        
    }
    render(){
        const names = ["kevin","lee"];
        return (
            <div>
                <h1>Home组件的复用</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>按钮</button> */}
                {/* 使用初始化函数进行绑定this */}
                {/* <button onClick={this.clickHandler}>按钮</button> */}
                {/* 使用箭头函数进行绑定this */}
                {/* <button onClick={(e) => this.clickHandler(e)}></button> */}
                <ul>
                    {
                        names.map((element,index) =>{
                            // return <li onClick={this.clickHandler.bind(this,element)} key={index}>{element}</li>
                            return <li onClick={(e) => this.clickHandler(element,e)} key={index}>{element}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}