import React, { Component } from 'react';
import Todoitem from '../Todoitem/Todoitem';
import './Todogrid.css';

class Todogrid extends Component {
   
    render(){
        const onDelete = this.props.onNoteDelete;
        
        return(
            <div className="Todogrid-wrap" >
                {
                    this.props.notes.map((note)=>{
                        return(
                            <Todoitem 
                                key={note.id}
                                title={note.title}
                                text={note.text}
                               
                                delete={onDelete.bind(null, note)}
                            />
                        )
                    })
                }
                
            </div>
        )
    }
}

export default Todogrid;