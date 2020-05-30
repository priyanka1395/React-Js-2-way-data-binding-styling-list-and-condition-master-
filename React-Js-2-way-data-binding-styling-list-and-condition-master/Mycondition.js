import React,{Component} from 'react';

class Mycondition extends Component{
constructor(){
  super();
  this.state = {
    checked : true
  }
}
toggleContent = ()=>{
  this.setState({
    checked : !this.state.checked
  })
}

render(){
  return (
    <div>
    <h1>Check for content</h1>
    <button onClick={this.toggleContent}>Toggle</button>
{
  this.state.checked ? <div><h2>Telco</h2></div> : null
}

    </div>
  )
}

}

export default Mycondition;