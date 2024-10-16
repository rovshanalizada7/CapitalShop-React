import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import { removeFromBasket } from '../redux/feature/basket/basketSlice';


const BasketPage = () => {

  const dispatch = useDispatch()
  const basketItems = useSelector((state) => state.basket.items);

  const handleDelete = (item) => {
    dispatch(removeFromBasket(item))
  }

  return (
    <div >
      <Header/>
      <h2 style={{textAlign:"center",marginBottom:"1.7rem"}}>Your Basket</h2>
   <div style={{display:"flex",flexDirection:"column" ,flexWrap:"wrap",gap:"1.5rem",justifyContent:"center",marginLeft:"1.7rem"}} >
   {basketItems.length > 0 ? (
        basketItems.map((item) => (
      <div style={{display:"flex",width:"55%",justifyContent:"space-between",alignItems:"center"}}>
         <div style={{width:"200px",height:"350px",marginBottom:"1.7rem"}}>
        <img src={item.image} style={{width:"200px",height:"300px"}} />
         <p key={item.id} style={{textAlign:"center",paddingTop:"1rem"}} >{item.title}</p>
       </div>
       <div style={{display:"flex",alignItems:"center",fontSize:"30px"}}>
        {`$${item.price}`}
       </div>
       <button style={{height:"37px",width:"70px",borderRadius:"10px",border:"none",background:"red",color:"#fff"}} onClick={() => handleDelete(item)}>Delete</button>
      </div>
        ))
      ) : (
        <p style={{textAlign:"center"}} >Your basket is empty.</p>
      )}
   </div>
    </div>
  );
};

export default BasketPage;
