import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import customerReducer from '../features/customers/CustomerSlice'
import productReducer from '../features/product/productSlice'
import orderReducer from '../features/orders/orderSlice';
import categoryReducer from '../features/category/categorySlice';
import uploadReducer from '../features/upload/upload/uploadSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    order: orderReducer,
    category: categoryReducer,
    upload: uploadReducer,
  },
});
