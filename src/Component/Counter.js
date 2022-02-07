import React from "react"

class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count : 0,
            inpT : '',
            test : false
        }
      console.log('Initialisation')
    }
    increment=(a)=> this.setState({count : this.state.count + a})
    decrement=()=> this.state.count > 0 && this.setState({count : this.state.count - 1}) 
   
    componentDidMount(){
        console.log('Mount')
        document.title = 'HI'
        this.setState({test : !this.state.test})
        
    }
    componentDidUpdate(){
        console.log('Update')
        document.title = this.state.count
       
    }
    componentWillUnmount(){
        console.log('Unmount')
        document.title = 'BYE'
    }
    render(){
        console.log('Render')
        return(
            <div>
                <h2>Counter Component</h2>
               <button onClick={this.decrement}>-</button>
               <span>{this.state.count}</span>
               <button onClick={()=>this.increment(2)}>+</button>
               <br/>
               <br/>
               <input placeholder="Entrez votre nom" onChange={(e)=>this.setState({inpT : e.target.value})}/>
               <h3>{this.state.inpT}</h3>
               {
                   this.state.test ? <h2>Elyes</h2> : <h2>Skander</h2>
               }
            </div>
        )
    }
}

export default Counter