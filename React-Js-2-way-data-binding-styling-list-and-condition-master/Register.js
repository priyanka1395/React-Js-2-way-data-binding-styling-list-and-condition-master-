import React from 'react';

const Register = (props)=>{
  return (
    <div>
First Name : <input onChange={props.change} value={props.firstname}/>
[{props.firstname}]
<br/>
Email : <input value={props.email}/>
    </div>
  )
}

export default Register;