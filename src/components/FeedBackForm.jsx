import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
const FeedBackForm = () => {
    const[text , setText] = useState('')
    const handleTextChange = (e) =>{
      console.log(  e.target.value)
    }
  return (
    <Card className='review-card'>
        <form >
        <div className="input-groups">
            <input type="text" onChange={handleTextChange} placeholder='enter your thoughts' />
            <button type="submit" >send</button>
        </div>
        </form>
       
    </Card>
  )
}

export default FeedBackForm