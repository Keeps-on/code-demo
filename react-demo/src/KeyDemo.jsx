

import React from 'react';


export default class KeyDemo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userinfo: [
                {
                    name: 'kevin',
                    age: 18,
                    sex: '男',
                    language: ['english', 'chinese']
                },
                {
                    name: 'ime',
                    age: 20,
                    sex: '男',
                    language: ['english', 'chinese']
                },
                {
                    name: 'frak',
                    age: 35,
                    sex: '男',
                    language: ['english', 'chinese']
                },
            ]
        }
    }

    clickHandeler = () => {
        this.setState({
            userinfo: this.state.userinfo.concat([
                {
                    name: 'en',
                    age: 30,
                    sex: '女',
                    language: ["java", "css"]
                }
            ]
            )
        })
    }

    render() {
        return (
            <div>
                <h3>列表渲染</h3>
                <ul>
                    {
                        this.state.userinfo.map((element, index) => {
                            // return <li key={index}>{element.name}</li>
                            return (
                                // 注意key永远是加在最外层的数据
                                <li key={index}>
                                    <span>{element.name}</span>
                                    <span>{element.age}</span>
                                    <span>{element.sex}</span>
                                    <div>
                                        {
                                            element.language.map((childElement, childIndex) => {
                                                return <span key={childIndex}>{childElement}</span>
                                            })
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.clickHandeler}>添加数据</button>
            </div>
        )
    }

}
