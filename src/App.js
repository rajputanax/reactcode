import Header from './components/Header';
import { useState } from 'react';
import FeedBackList from './components/FeedBackList';
import FeedBackStats from './components/FeedBackStats';
import RealData from './components/data/RealData';
import FeedBackForm from './components/FeedBackForm';
function App() {
// usestate hook for dynamic data 


 const[real , setReal]= useState(RealData)


// delete function ======================================
const deleteFeedback = (id)=>{
if(window.confirm('are you sure ')){
  setReal(real.filter( (x) => x.id!== id))
}
}

// ======================================================

  return (
    <> 
    {/* header component */}
          <Header bgclr='black' text={'FEEDBACK UI'}/>

          {/* feedbacklist which is going to loop through map method */}
          <div className="container">
           
            <FeedBackStats real={real}/>
            <FeedBackForm/>
            <FeedBackList real={real} handleDelete={deleteFeedback}/>
          </div>
         {/* ================================================================================== */}
     
    </>
        

    
  )
}

export default App;
