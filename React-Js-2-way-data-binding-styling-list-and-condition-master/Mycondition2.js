import React,{Component} from 'react';


class Mycondition2 extends Component{
constructor(){
  super();
  this.state = {
    checked : true
  }
}
toggleContent=()=>{
this.setState({
  checked : !this.state.checked
});
}
render(){
const myTxt = null;
if(this.state.checked){
 myTxt = (
  <div>
<h2>This is content</h2>
  </div>
)
}
else{
 myTxt = (
  <div>
<h2>No content found</h2>
  </div>
) 
}
  return (
    <div>
<h2>Toggle the text content</h2>
<button onClick={this.toggleContent}>Toggle</button>
{myTxt}
    </div>
  )
}
}
export default Mycondition2;