import React from "react";

export default class StudentCard extends  React.Component{
    render(){
        return(
            <div>
                <h2>Student card</h2>
                <p>name : {this.props.name}</p>
                <p>course : {this.props.course}</p>

            </div>
        )
    }
}