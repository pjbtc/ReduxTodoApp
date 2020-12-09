import React,{useState} from 'react';
import {connect} from 'react-redux';
import {add_new_note} from './redux/actions/notes.action';

const CreateNote=({add_new_note})=>{

	const[note, setNote]= useState('')

	const handleSubmit=(e)=>{
		e.preventDefault();
			const data={
				note,
				id: Math.floor(Math.random()*1000),
				date: new Date().toJSON().slice(0,10),
				isImportant: false
			}
			add_new_note(data)
			
			
	}
	return(
		<div>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<textarea cols="3" className="form-control" placeholder="Write your dream note :)" value={note} onChange={e=>setNote(e.target.value)}></textarea>
					<button className="btn" type="submit">Add note</button>
				</div>	
			</form>
		</div>
		)
}
//const mapDispatchToProps=dispatch=>{
		//return{
			//add_new_note:(data)=>dispatch({
				//type: "ADD_NOTE",
				//payload: data

			//})
			//}

//}



export default connect(null,{add_new_note})(CreateNote);