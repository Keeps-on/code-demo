import React from 'react';
import qs from "querystring"
import ProxyDemo from './ProxyDemo'
import api from './api'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      banners: []
    }
  }

  componentDidMount() {

    //#region 发送get请求
    // fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       banners: data.banner
    //     })
    //   })
    //#endregion

    //#region 发送post请求
    // fetch("http://iwenwiki.com/api/blueberrypai/login.php", {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Accept': 'application/json,text/plain,*/*'
    //   },
    //   // body: {
    //   //   user_id: 'iwen@qq.com',
    //   //   password: 'iwen123',
    //   //   verification_code: 'crfvw'
    //   // }
    //   // body:"user_id=iwen@qq.com&password=iwen123&verification_code=crfvw"
    //   body: qs.stringify({
    //       user_id: 'iwen@qq.com',
    //       password: 'iwen123',
    //       verification_code: 'crfvw'
    //   })
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //   })

    //#endregion

    //#region 使用封装的api
    // 发送get请求
    // api.getChentpin().then(res => res.json()).then(data => {
    //   console.log(data);
    // })

    // 发送post请求
    api.getLogin({
      user_id: 'iwen@qq.com',
      password: 'iwen123',
      verification_code: 'crfvw'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    //#endregion
  }

  render() {
    const { banners } = this.state
    return (
      <div>
        {
          banners.length > 0 ?
            <ul>
              {
                banners.map((element, index) => {
                  return <li key={index}>{element.title}</li>
                })
              }
            </ul>
            : <div>等待数据加载...</div>
        }
        <ProxyDemo />
      </div>
    );
  }
}



