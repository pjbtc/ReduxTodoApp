import React from 'react';
import Note from './Note';

import {connect} from 'react-redux';

const AllNotes=({toggle_note,	 notes})=>{

	//const notes=store.getState().notes
	
		return(
		 <div className='my-3'>
		 <h3> All notes</h3>
		 <div className="row">
		 {
		 	notes.map(note=> <Note key={note.id} note={note} />)
		 }
		 </div>
		 </div>
		 )
	
}
const mapStatetoProps=state=>({
	notes: state.notes_reducer.notes

})

export default connect(mapStatetoProps) (AllNotes);