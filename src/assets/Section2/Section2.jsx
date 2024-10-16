import React, { useEffect } from 'react'
import "../Section2/section2.css"
import RecipeReviewCard from './Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/feature/product/productSlice'




const Section2 = () => {

const dispatch = useDispatch()
const {value} = useSelector((state) => state.product)

useEffect(() => {
 dispatch(getProduct())
},[])

  return (
<>
<h1 style={{textAlign:"center",margin:"1.5rem 0"}}>Products</h1>
<section className='section2'>
   {
    value.map( item => (
      <RecipeReviewCard key={item.id} item={item} />
    ))
   }
  </section>
</>
  )
}

export default Section2