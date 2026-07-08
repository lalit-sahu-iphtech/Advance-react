import React from "react";

export default class ProductCard extends React.Component{
    render(){
        return(
            <div>   
                <h2>title : {this.props.title}</h2>

                <p>price : {this.props.price}</p>
                
            </div>
        )
    }
}