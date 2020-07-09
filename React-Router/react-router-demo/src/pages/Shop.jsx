import React from 'react'
import { Redirect, Prompt } from "react-router-dom";
export default class Shop extends React.Component {

    state = {
        // isLogin: false
        isLogin: true,
        name: ""
    }

    render() {

        const { isLogin } = this.state;

        return (
            <div>
                {
                    isLogin ? <div>shop</div> : <Redirect to='/' />
                }
                <Prompt
                    when={!!this.state.name}
                    message={'你确定要离开吗？'}
                />
                <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
            </div>
        )
    }
}