import React  from 'react';
import CreateNote from './CreateNote';
import AllNotes from './AllNotes';
import ImportantNotes from './ImportantNotes';
import './App.css';

const App=()=>{

 

 
 

  return(
      <div className="container mt-3 p-3">
      <CreateNote />
      <hr/>
      <ImportantNotes />
      <AllNotes notes/>
      </div>
      )
}

export default App;
