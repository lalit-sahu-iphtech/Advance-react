import React from "react";

export default class EmployeeCard extends React.Component{
    render(){
        return(
            <div>   
                <h2>Employee Card</h2>
                <h2>Name : {this.props.name}</h2>

                <p>Role : {this.props.role}</p>
                
            </div>
        )
    }
}