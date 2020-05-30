import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Company from './Company';
import Inlinecss from './Inlinecss'
import Mycondition2 from './Mycondition2';
import School from './School';
import Mohantylist from './Mohantylist';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<Mohantylist />, document.getElementById('root'));
