import React, {useEffect} from 'react'
import {Container, Card} from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/product/productSlice';
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Products = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProducts());
  },[]);


  return (
    <Container className='mt-16 md:mt-2 items-center mx-auto my-8 bg-slate-100'>
      <Grid container spacing={3}>
        {products?.map((product, index) => (
          <Grid key={product._id} xs={12} sm={4}>
            <Card className="flex flex-col p-6 space-y-10 bg-white rounded-3xl shadow-2xl md:space-y-0 md:space-xl-10 md:m-0 md:p-8" elevation={24}>
              {product.images.length > 0 && (
                <div className='bg-gray-100 rounded-lg mb-2 w-60 h-60 mx-auto flex items-center'>
                  <img src={product.images[0].url} alt={product.title} className='my-auto duration-200 p-4 hover:scale-110'/>
                 </div>
              )}
             
             <div className='flex flex-col space-y-4'>
              <div className='flex flex-col mb-4 space-y-3 items-center md:items-start'>
                <div className='flex justify-between items-center space-x-28'>
                  <div className='inline-block px-2 py-1 text-sm font-bold hover:scale-110 text-black border-2 border-solid border-red-600 rounded-full'> 30% off</div>
                  <div className='text-2xl duration-200 hover:scale-110 hover:text-red-600'><FaRegHeart/></div>
                </div>
                <h1 className='max-w-sm text-xl font-medium'>{product.title}</h1>
                <h1 className='text-xs'>{product.category}</h1>
                <h1 className='texts-xs'>{product.quantity}</h1>
                
                <h1 className='flex flex-col text-center text-xl font-bold md:text-left'>{`Kshs. ${product.price}`}</h1>
              </div>
              </div>
              

              <div className='flex flex-col items-center'>               
                  <Link to={`/products/${product._id}`} className="bg-blue-600 p-2 rounded-lg w-full text-center text-white duration-200 hover:bg-blue-700 hover:text-white hover:font-bold shadow-none hover:scale-110 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
                  Edit
                  </Link>               
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Products