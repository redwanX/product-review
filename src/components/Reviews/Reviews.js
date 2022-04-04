import React from 'react'
import useReviews from '../../hooks/useReviews'
import Review from '../Review/Review';

const Reviews = () => {
  const [reviews,setReviews] = useReviews();
  return (
    <div>
                <h3 className='text-3xl py-5 font-bold text-gray-600 text-center'>WHAT OUR CUSTOMERS SAY!</h3>
      
            <div className='w-5/6 mx-auto grid lg:grid-cols-2 gird-cols-1 gap-4'>
                    
                    {
                        reviews&&reviews.map((review) => <Review key={review.id} review={review}></Review>)
                    }
                    
            </div>
        
    </div>
  )
}

export default Reviews