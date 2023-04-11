import React from 'react'

const FeedBackStats = ({real}) => {
// calculating averge of reviews 

let avg = real.reduce((acc,cur)=>{
    return acc + cur.rating
},0)/real.length;
 
avg.toFixed(1)

  return (
    <div className='feedback-stats'>
        <h4>no of reviews {real.length}</h4>
        <span>rating : {isNaN(avg)?0:avg}</span>
    </div>
  )
}

export default FeedBackStats