   

const initialState={
	notes:[
	{
		id: 1,
		date: '25/12/21',
		isImportant: false,
		note: 'I m note1'
	},
	{
		id: 2,
		date: '25/12/21',
		isImportant: false,
		note: 'I m note2'
	},
	{
		id: 3,
		date: '25/12/21',
		isImportant: false,
		note: 'I m note3'
	},
	]
}

const reducer=(previousState = initialState, action)=>{
	const {type, payload}=action;

	switch(type){	
		case ADD_NOTE:
			return{

				...previousState,
				notes:[...previousState.notes, payload]
			}

		case TOGGLE_NOTE:
				 const new_notes= previousState.notes.slice()
   				 const index = new_notes.findIndex(note=> note.id===payload)

    			const note= new_notes[index]

                const new_note={
                   ...note,
                    isImportant: !note.isImportant
   				 }
    			new_notes[index]=new_note
    				return{
    						...previousState,
    						notes: new_notes	
    				}
			 		default:
					return previousState

	}
}
export default reducer;