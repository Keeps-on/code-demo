
import React from 'react';
/**
 * 常用的应用场景
 *  1. 对视图条件进行切换
 *  2. 做缺省值
 * 
 */
export default class IfDemo extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            isLogin: false,
            // names: ['kevin', 'lee']
            names: []
        }
    }

    clickHandler = () => {
        this.setState({
            isLogin: true
        })
    }

    render() {

        const { names } = this.state;

        let showView = this.state.isLogin ?
            <div>欢迎登陆</div> :
            <div>请登陆</div>

        return (
            <div>
                <h3>条件渲染</h3>
                {showView}
                <button onClick={this.clickHandler}>登陆</button>
                <div>
                    {
                        names.length ?
                            <div>
                                {
                                    names.map((element, index) => {
                                        return <p key={index}>{element}</p>
                                    })
                                }

                            </div>
                        :
                        <div>请等待数据正在请求..</div>
                    }
                </div>
            </div>
        )
    }
}