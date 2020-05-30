import React,{Component} from 'react';

class Mohantylist extends Component{

constructor(){
  super();
  this.state = {
    emps : [
    {name : 'Mohan',age : 21,sal : 300},
    {name : 'Sohan',age : 22,sal : 250},
    {name : 'Rohan',age : 23,sal : 200}
  ]
}
}
render(){
  return (
<div>
<h2>List of Employees</h2>
<table>
<th>Name</th><th>Age</th><th>Salary</th>
{
this.state.emps.map((emp)=>{
  return (
    <tr key={emp.name}>
<td>{emp.name}</td><td>{emp.age}</td><td>{emp.sal}</td>
    </tr>
  )
})

}
</table>
</div>
  )
}

}

export default Mohantylist;
