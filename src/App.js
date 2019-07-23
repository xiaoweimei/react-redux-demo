import React from 'react';
import {connect} from "react-redux"

class App extends React.Component {

  render(){
    return (
      <div className="App">
        你点击了<span id="value">{this.props.n}</span>次
        <div>
          <button id="add1" onClick={()=>this.props.add1()}>+1</button>
          <button id="add2" >+2</button>
          <button id="addIfOdd" >如果是单数就+1</button>
          <button id="add1After2Sec" >两秒钟后+1</button>
        </div>
      </div>
    );
  }
}

function getPartialStore(state){
  return {
    n:state.n
  }
}
const y={
  add1:()=>{
    return {type:'add',payload:1}
  }
}


export default connect(getPartialStore,y)(App);
