import React from 'react'
import { useNavigate } from "react-router-dom";
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
const HomeReview = () => {
    const [reviews,setReviews] = useReviews();
    let reviews3;
    if(reviews.length){
         reviews3=reviews.slice(0,3);
    }
    let navigate = useNavigate();
  return (
    <div>
        <h3 className='text-4xl font-bold text-gray-600 text-center'>CUSTOMERS REVIEW</h3>
      
            <div className='w-5/6 mx-auto grid lg:grid-cols-3 grid-row-3 gap-4'>
                    
                    {
                        reviews3&&reviews3.map((rv) => <Review key={rv.id} review={rv}></Review>)
                    }
                    
            </div>
        
        <div className='flex justify-center my-5'>     
            <button className='bg-teal-600 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition ease-in-out duration-300' onClick={()=>navigate('/reviews')}>See All Review</button> 
        </div>
    </div>
  )
}

export default HomeReview