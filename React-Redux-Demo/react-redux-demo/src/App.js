import React from 'react';
import Parent from './components/coms/Parent'
import { conect, connect } from 'react-redux'

//#region 基础的使用
// class App extends React.Component {
//   render() {
//     const { value } = this.props
//     return (
//       <div className="App">

//         <h1>{value}</h1>
//         <button onClick={this.props.onIncrement} >increment</button>
//         <button onClick={this.props.onDecrement} >decrement</button>
//       </div>
//     );
//   }
// }
// export default App;
//#endregion
{/* <Parent  /> */ }

class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>{this.props.counter}</h1>
        <button >increment</button>
        <button >decrement</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state
  }
}
export default connect(mapStateToProps)(App);

