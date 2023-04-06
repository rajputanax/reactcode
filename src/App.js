import Header from './components/Header';
import { useState } from 'react';
import FeedBackList from './components/FeedBackList';
import RealData from './components/data/RealData';

function App() {
 const[real , setReal]= useState(RealData)

  return (
    <> 
    
          <Header bgclr='black' text={'FEEDBACK UI'}/>
          <div className="container">
            <FeedBackList real={real}/>
          </div>
     
    </>
        

    
  )
}

export default App;
