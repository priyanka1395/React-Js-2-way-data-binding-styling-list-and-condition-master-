import React,{Component} from 'react';

export class Mohantystyle extends Component{

constructor(){
  super();
  this.state = {
    first_name : 'Mohanty',
    age : 22,
    technology : "Javascript"
  }
}

render(){

const style = {
  width : '200px',
  height : '200px',
  border : '1px solid red',
  margin : '10px',
  padding : '10px',
  fontFamily : 'georgia'
}
  return (
    <div style={style}>
<h2>{this.state.first_name}</h2>
<p>
Age : {this.state.age}
</p>
<p>
Technology : {this.state.technology}
</p>
    </div>
  )
}

}

export default Mohantystyle;