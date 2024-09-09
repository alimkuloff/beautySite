import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Product } from '../types';
import { RootState } from '../store'; 
import { changeCurrency } from '../features/currency/currencySlice'; 
import './styles/ProductDetail.css';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const [product, setProduct] = useState<Product | null>(null); 
  const currency = useSelector((state: RootState) => state.currency.currency); 
  const dispatch = useDispatch();
  const conversionRate = 12500; // 1 USD = 12500 UZS kursi

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Product>(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const displayedPrice =
    product && currency === 'USD'
      ? `$${(product.price ?? 0)}` 
      : `${((product?.price ?? 0) * conversionRate).toFixed(2)} so'm`;

  const handleCurrencyChange = (newCurrency: string) => {
    dispatch(changeCurrency(newCurrency));
  };

  if (!product) {
    return <div className="single-loading">Loading...</div>; 
  }

  return (
    <div className="single-product-detail-container">
      <h1 className="single-product-title">{product.name}</h1>
      <img src={product.image_link} alt={product.name} className="single-product-image" />
      <p className="single-product-description">{product.description}</p>
      <p className="single-product-price">Price: {displayedPrice}</p>

      <div className="single-currency-buttons">
        <button
          onClick={() => handleCurrencyChange('USD')}
          className={`single-currency-button ${currency === 'USD' ? 'active' : ''}`}
        >
          USD
        </button>
        <button
          onClick={() => handleCurrencyChange('UZS')}
          className={`single-currency-button ${currency === 'UZS' ? 'active' : ''}`}
        >
          UZS
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
