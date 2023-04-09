import Header from './components/Header';
import { useState } from 'react';
import FeedBackList from './components/FeedBackList';
import RealData from './components/data/RealData';

function App() {
 const[real , setReal]= useState(RealData)
// delete function ======================================
console.log("checking" ,real.id)
const deleteFeedback = (id)=>{
if(window.confirm('are you sure ')){
  setReal(real.filter( (x) => x.id!== id))
}
}

// ======================================================

  return (
    <> 
    
          <Header bgclr='black' text={'FEEDBACK UI'}/>
          <div className="container">
            <FeedBackList real={real} handleDelete={deleteFeedback}/>
          </div>
         
     
    </>
        

    
  )
}

export default App;
