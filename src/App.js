import './App.css';
import React from 'react';
import Counter from './Component/Counter';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      show : false
    }
  }
  handleShow=()=> this.setState({show : !this.state.show})
  render(){
    return(
      <div>
        <h1>App Component</h1>
        <button onClick={this.handleShow}>{this.state.show ? 'Hide Counter' : 'Show Counter'}</button>

        { this.state.show && <Counter/> }
        
      </div>
    )
  }
}

export default App;
