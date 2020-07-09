import React from 'react'

//#region 
// const Demo = (props) => {
//     console.log(props);
//     return (
//         <div>
//             Demo{props.name}
//         </div>
//     )
// }
// export default Demo;
//#endregion

const Demo = ({name}) => {
    return (
        <div>
            Demo{name}
        </div>
    )
}
export default Demo;