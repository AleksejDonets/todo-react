import React, { Component } from 'react';
import './Todoitem.css';

export default class Todoitem extends Component {
    

 
    render(){
        const {title, text, completed} = this.props;
    
        return(
            <div className = {completed ? "Todoitem Todoitem--completed" : "Todoitem"} >
                <span className="Todoitem-head">{title}</span>
                <p className="Todoitem-text">{text}</p>
                
               
                <span className="Todoitem-delete" onClick={this.props.delete}> × </span>
                <div className="Todoitem-checked" >
                    <label htmlFor="comleted" className={completed ? "Todoitem-checked__label Todoitem-checked__label-active" : "Todoitem-checked__label"}  onClick={this.props.changeStatus}>
                        <input type="checkbox" name="completed"/>
                        
                    </label>
                    <span>Completed</span>
                </div>
               
            </div>
        )
    }
}
