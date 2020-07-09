import React from 'react';
import querystring from 'querystring'
import MineDemo from './MineDemo'
// export default class Mine extends React.Component{

//     render(){
//         return (
//             <div>
//                 Mine
//             </div>
//         )
//     }
// }

const Mine = (props) => {
    console.log(props);
    // const params = new URLSearchParams(props.location.search)
    // console.log(params.get('name'));
    // console.log(params.get('age'));
    const value = querystring.parse(props.location.search)
    console.log(value); // 干掉?
    
    
    const clickHandle = () =>{
        console.log('事件')
        console.log(props);
        props.history.push('/home')
        

    }

    return (
        <div>
            Mine
            {/* 使用函数定义组件的时候不需要增加this指向的问题 */}
            {/* <button onClick={this.clickHandle}>回到home页面</button> */}
            <button onClick={clickHandle}>回到home页面</button>

            <MineDemo/>
        </div>
    )
}
export default Mine;