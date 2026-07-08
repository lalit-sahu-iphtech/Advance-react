import React from "react";

export default class Header extends React.Component{

    render(){
        return(
           <div>
             <h2>Header component</h2>
            <p>My name is {this.props.name}</p>
           </div>
        )
    }
}