import React from 'react'
import {FaTimes}  from 'react-icons/fa'
import Card from './shared/Card.jsx'
const FeedBackItem = ({reel , handleDelete}) => {
  const{rating , text} = reel
  return (<>
   <Card >
   <div className="rating">{rating}</div>
   <button className='close' onClick={()=>handleDelete(reel.id)}>
    <FaTimes color="purple" />
   </button>
        <div className="text">
          <p>{text}</p>
          </div>
   </Card>
        
    
  </>
 
  
  )
}

export default FeedBackItem