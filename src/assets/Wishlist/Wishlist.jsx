import React from 'react'
import Header from '../Header/Header'
import { useSelector } from 'react-redux';
import RecipeReviewCard from '../Section2/Card/Card';

const Wishlist = () => {

 const wishListItems = useSelector((state) => state.wishList.items);

  return (
    <div>
        <Header/>
        <h2 style={{textAlign:"center",marginBottom:"1.7rem"}}>Your Wishlist</h2>
   <div style={{display:"flex", flexWrap:"wrap",gap:"1.5rem",justifyContent:"center"}} >
   {wishListItems.length > 0 ? (
        wishListItems.map((item) => (
         <RecipeReviewCard key={item.id} item={item}/>
        ))
      ) : (
        <p>Your basket is empty.</p>
      )}
    </div>
    </div>
  )
}

export default Wishlist