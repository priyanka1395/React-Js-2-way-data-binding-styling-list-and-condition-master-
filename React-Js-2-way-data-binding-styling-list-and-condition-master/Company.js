import React,{Component} from 'react';
import Register from './Register';
class Company extends Component{

constructor(){
super();
this.state = {
  first_name : '',
  email : ''
}
}

txtChange=(evt)=>{
this.setState({
  first_name : evt.target.value
})
}

render(){
  return (
    <div>
<Register change={this.txtChange} firstname={this.state.first_name} email={this.state.email}/>
    </div>
  )
}


}

export default Company;