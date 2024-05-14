import React, { useEffect} from 'react';
import { Paper, Container, CssBaseline } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getaProduct } from '../features/product/productSlice';
import 'react-toastify/dist/ReactToastify.css';


const Edit = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.product);

    useEffect(() => {
        if (id) {
            dispatch(getaProduct(id));
            console.log("ProductId",id)
        }   

    }, [dispatch, id])

    return (
        <Container className="mt-20 md:mt-1 flex items-center">
            <Paper elevation={24} className="w-72 mx-auto my-8" component="form">
            
                <CssBaseline />
                <h1 className="text-center py-2 text-blue-600 font-medium">Update Product</h1>
                <div className="p-2 flex flex-col gap-3 items-center text-sm">
                {product && (
            <>
              <h2>{product.title}</h2>
              <h2>{product.price}</h2>
             
            </>
          )}

                    <button
                        className="bg-blue-600 p-2 mb-2 rounded-lg w-64 text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 mt-4"
                        type="submit"
                    >
                        Update Product
                    </button>
                </div>
            </Paper>
        </Container>
    );
}

export default Edit;
