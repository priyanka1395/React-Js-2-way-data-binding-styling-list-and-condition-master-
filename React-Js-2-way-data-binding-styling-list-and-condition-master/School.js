import React,{Component} from 'react';
import Student from './Student';

class School extends Component{

constructor(){
  super();//invokes parent class constructor
  this.state = {
    first_name : 'Ankit',
    email : 'ankit@gmail.com'
  }
}

nameChange = (evt)=>{
console.log('Chnage the name')
this.setState({
  first_name : evt.target.value
})
}

render(){
  return (
    <div>
<Student change={this.nameChange}  firstname={this.state.first_name} email={this.state.email} />
    </div>
  )
}

}

export default School;