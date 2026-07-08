import React from "react"

export default class Counter extends React.Component{


    constructor(){
    super();
    this.state={  
    count:0   
    }   
   
 }
 increment = ()=>{
    this.setState({
    count:this.state.count+1
 })
}
 render(){
    return(
        <div>
            <h2>count :{this.state.count}</h2>
            <button onClick={this.increment}>+1

              </button>
        </div>
    )
 }
}