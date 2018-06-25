import React, { Component } from 'react';
import Todoform from './Todoform/Todoform';
import Todogrid from './Todogrid/Todogrid';
import './App.css';

class App extends Component { 
  constructor(props){
    super(props);
    this.state = {
     
      notes:[]
    }
  }
 
    componentDidMount = () =>{
      const localNotes = JSON.parse(localStorage.getItem('notes'));
      if (localNotes) {
          this.setState({ notes: localNotes });
      }
    }
  
  componentDidUpdate = () =>{
    this._updateLocalStorage();
  }

  handleNoteAdd = (newNote) =>{
  
      const newNotes = this.state.notes.slice();
     
      newNotes.unshift(newNote);

      this.setState({ 
        notes: newNotes 
      });
    }
   

  handleNoteDelete = (note) =>{
    const noteId = note.id;

    const newNotes = this.state.notes.filter((note)=>{
      return note.id !== noteId
    });
    this.setState({
      notes: newNotes
    });
  }
  

  _updateLocalStorage= () => {
    const notes = JSON.stringify(this.state.notes);
    localStorage.setItem('notes', notes);
  }
  updateStatusNote = (note) => {
    const noteId = note.id;
    const arrNote = this.state.notes;

    arrNote.forEach((note) => {
      if(noteId === note.id){
        note.completed = !note.completed
        
      }
    })
    this.setState({
      notes:arrNote
    });
  }

  render() {

    return (
      <div className="App">
        <Todoform handleNoteAdd={this.handleNoteAdd}/>
        <Todogrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} onChangeStatus={this.updateStatusNote} />
      </div>
    );
  }
}

export default App;
