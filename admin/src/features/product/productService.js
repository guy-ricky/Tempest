import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/base_url";

const getProducts = async () => {
  const response = await axios.get(`${base_url}products/`);

  return response.data;
};

const getaProduct = async (productId) => {
  const response = await axios.get(
    `${base_url}products/${productId}/`
  );
  return response.data;
};

const createProducts = async (product) => {
  const response = await axios.post(`${base_url}products/`, product, config);

  return response.data;
  
};

const updateProduct = async(productId, updatedFields) => {
  const response = await axios.put(
    `${base_url}products/${productId}/`,
    updatedFields,
    config
  );

  return response.data;
}

const productService = {
  getProducts,
  createProducts,
  updateProduct,
  getaProduct
};

export default productService;