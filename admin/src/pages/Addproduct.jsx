import React, { useEffect, useState } from 'react';
import { Paper, Container, CssBaseline } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../features/category/categorySlice';
import { createProducts, resetState } from '../features/product/productSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase';
import Dropzone from 'react-dropzone';

const schema = yup.object().shape({
  title: yup.string().required('Title is Required'),
  category: yup.string().required('Category is Required'),
  quantity: yup.number().required('Quantity is Required'),
  description: yup.string().required('Description is Required'),
  price: yup.string().required('Price is Required'),
});

const Addproduct = () => {

  const dispatch = useDispatch();
  const catState = useSelector((state) => state.category.categories);
  const [images, setImages] = useState([]);
  const [uploadedImageUrls, setUploadedImageUrls] = useState([]);
  const [imgperc, setImgPerc] = useState([]);
  const { isSuccess, isError, createdProduct } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      title: '',
      category:'',
      quantity: '',
      description: '',
      price: '',
      images: [],
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log('Payload:', (values));
      const newProduct ={
        ...values,
        images: uploadedImageUrls.map(url => ({ url })), 
      };
      dispatch(createProducts(newProduct));
      formik.resetForm();
      setUploadedImageUrls([]);
      setImgPerc([]);

      setTimeout(() => {
        dispatch(resetState());
      }, 3000);
    },
  });

  useEffect(() => {
    if (isSuccess && createdProduct) {
      toast.success('Product Added Successfully!');
    }
    if (isError) {
      toast.error('Something Went Wrong!');
    }
  }, [isSuccess, isError, createdProduct]);

  useEffect(() => {
    images.forEach((img, index) => {
      UploadFile(img, index);
    });
  }, [images]);

  const UploadFile = async (file, index) => {
    const storage = getStorage(app);
    const folder = 'images/';
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
  
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImgPerc((prevImgPerc) => {
          const newImgPerc = [...prevImgPerc];
          newImgPerc[index] = Math.round(progress);
          return newImgPerc;
        });
      },
      (error) => {
        console.log(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('Download URL:', downloadURL); // Display download URL on the console
          setUploadedImageUrls((prevUrls) => [...prevUrls, downloadURL]);
        } catch (error) {
          console.error('Error getting download URL:', error);
        }
      }
    );
  };
  
  const handleDrop = (acceptedFiles) => {
    setImages(acceptedFiles);
  };

  return (
    <Container className="mt-20 md:mt-1 flex items-center">
    <Paper elevation={24} className="w-72 mx-auto my-8" component="form" onSubmit={formik.handleSubmit}>
      <CssBaseline />
      <h1 className="text-center py-2 text-blue-600 font-medium">Add Product</h1>
      <div className="p-2 flex flex-col gap-3 items-center text-sm">
        <input
          type="text"
          placeholder="Product-Name"
          name="title"
          required
          onChange={formik.handleChange('title')}
          value={formik.values.title}
          className="block w-64 border-solid border-2 border-gray-400 p-1 rounded-lg"
        />
        <div className="text-xs text-red-500">
          {formik.touched.title && formik.errors.title ? <div>{formik.errors.title}</div> : null}
        </div>
        <select
          type="text"
          placeholder="Category"
          required
          onChange={formik.handleChange('category')}
          value={formik.values.category}
          className="block w-64 border-solid border-2 border-gray-400 p-1 rounded-lg"
        >
          <option value="">Select Category</option>
          {catState?.map?.((i) => (
            <option key={i._id} value={i.title}>
              {i.title}
            </option>
          ))}
        </select>
        <div className="text-xs text-red-500">
          {formik.touched.category && formik.errors.category ? <div>{formik.errors.category}</div> : null}
        </div>
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          onChange={formik.handleChange('quantity')}
          value={formik.values.quantity}
          required
          className="block w-64 border-solid border-2 border-gray-400 p-1 rounded-lg"
        />
        <div className="text-xs text-red-500">
          {formik.touched.quantity && formik.errors.quantity ? <div>{formik.errors.quantity}</div> : null}
        </div>
        <textarea
          type="text"
          name="description"
          placeholder="Description"
          rows={4}
          required
          onChange={formik.handleChange('description')}
          value={formik.values.description}
          className="block w-64 h-80 border-solid border-2 border-gray-400 p-1 rounded-lg"
        />
        <div className="text-xs text-red-500">
          {formik.touched.description && formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
        </div>
        <input
          type="string"
          name="price"
          placeholder="Price"
          required
          onChange={formik.handleChange('price')}
          value={formik.values.price}
          className="block w-64 border-solid border-2 border-gray-400 p-1 rounded-lg"
        />
        <div className="text-xs text-red-500">
          {formik.touched.price && formik.errors.price ? <div>{formik.errors.price}</div> : null}
        </div>
        <div className="block w-64 border-solid border-2 border-gray-400 p-1 rounded-lg">
            <Dropzone onDrop={handleDrop}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  </div>
                </section>
              )}
            </Dropzone>
            <div className="showimages d-flex flex-wrap gap-3">
              {/* Display uploaded images */}
              {images.map((file, index) => (
                <div className=" position-relative" key={index}>
                  <img src={URL.createObjectURL(file)} alt="" width={50} height={50} />
                  {imgperc.map((perc, index) => (
              perc && <div key={index}>Uploading {perc}%</div>
            ))}
                </div>
              ))}
            </div>
          </div>
        <button
          className="bg-blue-600 p-2 mb-2 rounded-lg w-64 text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 mt-4"
          type="submit"
        >
        Add Product
        </button>
        <ToastContainer />
      </div>
    </Paper>
  </Container>
  )
}

export default Addproduct