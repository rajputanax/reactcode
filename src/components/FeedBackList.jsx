
import FeedBackItem from "./FeedBackItem"
const FeedBackList = ({real , handleDelete} ) => {
    
  
  return <>
  <div className="feedbackList">
    {real.map((reel )=>(<FeedBackItem key={reel.id}  reel={reel}  handleDelete={handleDelete}/>))}
  </div>

    </>
   
  
}

export default FeedBackList