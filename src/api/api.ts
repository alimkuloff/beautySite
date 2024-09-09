import axios from 'axios';

const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

export const fetchProducts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
