import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Container, CssBaseline, CircularProgress } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../features/category/categorySlice';
import { updateProduct } from '../features/product/productSlice';
import { getaProduct } from '../features/product/productSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
    title: yup.string().required('Title is Required'),
    category: yup.string().required('Category is Required'),
    quantity: yup.number().required('Quantity is Required'),
    description: yup.string().required('Description is Required'),
    price: yup.string().required('Price is Required'),
  });

const Edit = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const catState = useSelector((state) => state.category.categories);
    const {product, isLoading, isError, message} = useSelector(
        (state) => state.product);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);
     

    useEffect(() => {
        if (id) {
            dispatch(getaProduct(id));
        }
    }, [dispatch, id]);

    const formik = useFormik({
        initialValues: {
            title: product?.title || '',
            category: product?.category || '',
            quantity: product?.quantity || '',
            description: product?.description || '',
            price: product?.price || '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(updateProduct({id, updatedFields: values}));
        },
    });

    return (
        <Container className="mt-20 md:mt-1 flex items-center">
            <Paper elevation={24} className="w-72 mx-auto my-8" component="form" onSubmit={formik.handleSubmit}>
                {isLoading && <CircularProgress size={20} />}
                {isError && <p className='text-red-500'>{message}</p>}
                <CssBaseline />
                <h1 className="text-center py-2 text-blue-600 font-medium">Update Product</h1>
                <div className="p-2 flex flex-col gap-3 items-center text-sm">
                    <input
                        type="text"
                        placeholder="Product-Name"
                        name="title"
                        required
                        className="block w-64 border-solid border-2 border-gray-400 p-1 rounded-lg"
                        {...formik.getFieldProps('title')}
                    />

                    <select
                        type="text"
                        placeholder="Category"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.category}
                        className="block w-64 border-solid border-2 border-gray-400 p-1 rounded-lg"
                        name="category"
                    >
                        <option value="">Select Category</option>
                        {catState?.map?.((i) => (
                            <option key={i._id} value={i.title}>
                                {i.title}
                            </option>
                        ))}
                    </select>

                    <textarea
                        type="text"
                        placeholder='Description'
                        name='description'
                        rows={4}
                        required
                        className="block w-64 border-solid border-2 border-gray-400 p-1 rounded-lg"
                        {...formik.getFieldProps('description')}
                    />

                    <input
                        type="string"
                        placeholder='Product-Price'
                        name='price'
                        required
                        className="block w-64 border-solid border-2 border-gray-400 p-1 rounded-lg"
                        {...formik.getFieldProps('price')}
                    />

                    <input
                        type="text"
                        placeholder="Product-Quantity"
                        name="quantity"
                        required
                        className="block w-64 border-solid border-2 border-gray-400 p-1 rounded-lg"
                        {...formik.getFieldProps('quantity')}
                    />

                    <button
                        className="bg-blue-600 p-2 mb-2 rounded-lg w-64 text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 mt-4"
                        type="submit"
                    >
                        Update Product
                    </button>
                    <ToastContainer />
                </div>
            </Paper>
        </Container>
    );
}

export default Edit;
