import React from 'react'

const FeedBackItem = ({reel}) => {
  const{rating , text} = reel
  return (<>
   
        <div className="rating">{rating}</div>
        <div className="text">
          <p>{text}</p>
          </div>
    
  </>
 
  
  )
}

export default FeedBackItem