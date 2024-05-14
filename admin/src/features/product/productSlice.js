import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import productService from "./productService";

// Async thunks for products list
export const getProducts = createAsyncThunk(
  "products/get-products",
  async (_, thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Async thunk for a single product
export const getaProduct = createAsyncThunk(
  "product/get-a-product",
  async (id, thunkAPI) => {
    try {
      return await productService.getaProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createProducts = createAsyncThunk(
  "products/create-products",
  async (productData, thunkAPI) => {
    try {
      return await productService.createProducts(productData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/update-product",
  async (productData, thunkAPI) => {
    try {
      const { productId, ...updatedFields } = productData;
      return await productService.updateProduct(productId, updatedFields);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

// Initial state with separate product field
const initialState = {
  products: [],
  product: null, // state for a single product
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// Slice configuration
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error.message || "Failed to fetch products";
      })
      .addCase(getaProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getaProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload; // Update single product state
      })
      .addCase(getaProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error.message || "Failed to fetch product";
      })
      .addCase(createProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products.push(action.payload); // Optionally add the new product to the list
      })
      .addCase(createProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error.message || "Failed to create product";
      })
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // Update the product in the list
        state.products = state.products.map(product =>
          product._id === action.payload._id ? action.payload : product
        );
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error.message || "Failed to update product";
      })
      .addCase(resetState, () => initialState); // Reset to initial state
  },
});

export default productSlice.reducer;