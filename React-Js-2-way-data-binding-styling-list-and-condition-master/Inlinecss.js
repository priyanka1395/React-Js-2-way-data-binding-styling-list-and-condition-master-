import React,{Component} from 'react';

class Inlinecss extends Component{

render(){

let style = {
  width : '200px',
  height : '200px',
  color : '#cccccc',
  border : '1px solid green',
  margin : " 10px",
  padding : '10px'
}

  return (
    <div>

<div style={style}>We all are indians</div>

    </div>
  )
}



}

export default Inlinecss;