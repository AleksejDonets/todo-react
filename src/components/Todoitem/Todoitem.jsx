import React, { Component } from 'react';
import './Todoitem.css';

export default class Todoitem extends Component {
    
    render(){
        const {title, text} = this.props;
    
        return(
            <div className= "Todoitem" >
                <span className="Todoitem-head">{title}</span>
                <p className="Todoitem-text">{text}</p>
                <span className="Todoitem-delete" onClick={this.props.delete}> × </span>
                
            </div>
        )
    }
}
