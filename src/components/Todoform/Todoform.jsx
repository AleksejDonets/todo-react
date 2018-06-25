import React, { Component } from 'react';
import './Todoform.css'

class Todoform extends Component {
  constructor(props){
    super(props);

    this.state = {
      title:'',
      text:'',
    }
  }

  handleNote = (event) => {
    let idTarget = event.target.id;
    if(idTarget === 'Todoform-title'){
      this.setState({
        title:event.target.value
      });
    }else{
      this.setState({
        text: event.target.value
      })
    }
  }


  
  handleNoteAdd = () =>{  
    const { text } = this.state;
    const newNote = {
      title:this.state.title,
      text:this.state.text,
      completed:false,
      id:Date.now()
    }

    if(text.length > 0 ){
      this.props.handleNoteAdd(newNote)
    }
    
    this.setState({ 
      title:'',
      text:'',
    });
  }

  
  
  render(){
    const {title, text} = this.state;
    return(
      <div className="Todoform-block">
        <div className="Todoform-content-wrap">
        <label htmlFor="Todoform-title" className="Todoform-title">
         
          <input 
            type="text" 
            name="Todoform-title" 
            id="Todoform-title" 
            placeholder="Title"
            value={title}
            onChange={this.handleNote}
          />
        </label>
        <label htmlFor="Todoform-text" className="Todoform-text">
          
          <textarea 
            name="Todoform-text" 
            id="Todoform-text" 
            cols="30" 
            rows="10"
            placeholder="Text note"
            onChange={this.handleNote}
            value={text}
          >
            
            </textarea>

            
        </label>
        <button className="Todoform-btn"  onClick={this.handleNoteAdd}>Add note</button>
        </div>
        
      </div>
    )
  }


}

export default Todoform;
