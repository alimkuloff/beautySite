import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchProducts } from '../features/products/productsSlice';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import Hero from '../assets/h.webp';
import './styles/Home.css';
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const categories = useSelector((state: RootState) => state.products.categories);

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  if (!products.length || !categories.length) {
    return <div>Loading...</div>;
  }

  const groupedProducts = categories.reduce<Record<string, Product[]>>((acc, category) => {
    acc[category] = products.filter(product => product.product_type === category);
    return acc;
  }, {});

  return (
    <div className='container'>
      <header style={{ backgroundImage: `url(${Hero})` }}>
        <h1>Welcome to Our Makeup Store</h1>
        <p>Discover the best makeup products for you!</p>
      </header>
      <section className='featured'>
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.slice(0, 6).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section>
        <h2>Products by Category</h2>
        {Object.keys(groupedProducts).map((category) => (
          <div key={category}>
            <h3>{category}</h3>
            <div className="product-grid">
              {groupedProducts[category].slice(0, 6).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
