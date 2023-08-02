import { useState } from 'react';
import Star from './Star'
import './Star.css'
import Button from './Button';

const StarRating = ({maxRating = 5}) => {

  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const starRatingHandler =(rating) =>{
    setRating(rating)
  }
  return(
    <>
      <div className='container'>
            <div className='star-container'>
              {Array.from({ length: maxRating }, (_, i) => (
                <Star
                  key={i}
                  onStar={()=>starRatingHandler(i + 1)}
                  full = { hoverRating ? hoverRating >= i + 1 : rating >= i + 1}
                  onHoverIn= {()=> setHoverRating(i + 1)}
                  onHoverOut ={() => setHoverRating(0)}/>
              ))}
            </div>
            <p className='text'>{hoverRating|| rating || " "}</p>

          </div>
          <Button />
    </>

  )
};

export default StarRating;
