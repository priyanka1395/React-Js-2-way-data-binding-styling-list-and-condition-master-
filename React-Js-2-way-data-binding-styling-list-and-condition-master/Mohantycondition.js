import React,{Component} from 'react';

class Mohantycondition extends Component{

constructor(){
  super();
  this.state = {
    checked : false
  }
}

toggleContent = ()=>{
  this.setState({
    checked : ! this.state.checked
  })
}

//handle through javscript style

render(){

let txtcontent =null;
if(this.state.checked){
  txtcontent = (
    <div>
<h2>Muhammad Ali</h2>
<p>
Ali was born and raised in Louisville, Kentucky and began training as an amateur boxer at age 12. At 18, he won a gold medal in the light heavyweight division at the 1960 Summer Olympics, and turned professional later that year. He converted to Islam after 1961, and eventually took the name Muhammad Ali. He won the world heavyweight championship from Sonny Liston in a major upset at age 22 in 1964.

In 1966, Ali refused to be drafted into the military, citing his religious beliefs and opposition to the Vietnam War.[6][7] He was arrested, found guilty of draft evasion, and stripped of his boxing titles. He appealed the decision to the Supreme Court, which overturned his conviction in 1971, but he had not fought for nearly four years and lost a period of peak performance as an athlete. His actions as a conscientious objector to the war made him an icon for the larger counterculture generation
</p>
    </div>
  )
}
else{
  txtcontent = null;
}

return (
  <div>
  <h1>Conditon goes here</h1>
  <button onClick={this.toggleContent}>Toggle</button>
  {txtcontent}
  </div>
)

}


// render(){
//   return (
//     <div>
// <h2>Apply condition</h2>
// <button onClick={this.toggleContent}>Toggle</button>
// {this.state.checked ? <h2>Content goes here</h2> : null

// }
//     </div>
//   )
// }


}

export default Mohantycondition;