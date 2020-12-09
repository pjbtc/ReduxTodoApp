 import React from 'react';

 export const add_new_note=(data)=> async(dispatch)=>{
 		// async stuff DB/API
 		dispatch({
 			type: ADD_NOTE,
 			payload: data
 		})
 }

 export const toggle_note=(id)=>async (dispatch)=>{
 	
 	 	dispatch ({
 	 		type: TOGGLE_NOTE,
 	 		payload: id
 	 	})
 }