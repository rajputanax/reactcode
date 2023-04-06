
import FeedBackItem from "./FeedBackItem"
const FeedBackList = ({real} ) => {
    
  
  return <>
  <div className="feedbackList">
    {real.map((reel )=>(<FeedBackItem reel={reel}/>))}
  </div>

    </>
   
  
}

export default FeedBackList