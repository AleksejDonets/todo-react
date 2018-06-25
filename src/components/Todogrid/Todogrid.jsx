import React, { Component } from 'react';
import Todoitem from '../Todoitem/Todoitem';
import './Todogrid.css';

class Todogrid extends Component {
   
    render(){
        const onDelete = this.props.onNoteDelete;
        const onChangeStatus = this.props.onChangeStatus;
        
        return(
            <div className="Todogrid-wrap" >
                {
                    this.props.notes.map((note)=>{
                        return(
                            <Todoitem 
                                key={note.id}
                                title={note.title}
                                text={note.text}
                                completed={note.completed}
                                delete={onDelete.bind(null, note)}
                                changeStatus = {onChangeStatus.bind(null, note)}
                            />
                        )
                    })
                }
                
            </div>
        )
    }
}

export default Todogrid;