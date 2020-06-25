

import React from 'react';

export default class ProxyDemo extends React.Component {
    /**
     * http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0
     * 跨域解决方案
     *  开发模式下:
     *      利用环境解决: react vue 常用框架,都提供了解决方案
     *  生成模式下:
     *      jsnp cors iframe postMessage...
     * 
     */
    //#region 开发环境下跨域的访问
    // "proxy": "http://tingapi.ting.baidu.com"
    // componentDidMount(){
    //     fetch("/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0")
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data)
    //     })
    //     .catch(error =>{
    //         console.log('请求失败');
    //         console.log(new Error(error));
    //     })
    // }
    //#endregion

    //#region 手动配置解决跨域
    // componentDidMount() {
    //     fetch("/api/list")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(error => {
    //             console.log('请求失败');
    //             console.log(new Error(error));
    //         })
    // }
    //#endregion



    render() {
        return (
            <div>
                hello
            </div>
        )
    }
}
