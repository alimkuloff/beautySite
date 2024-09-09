import { AiFillHeart } from "react-icons/ai"; 
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../types";
import { addToCart } from "../features/cart/cartSlice";
import { addFavorite, removeFavorite, selectFavorites } from "../features/favorites/favoritesSlice";
import { Link } from "react-router-dom";
import "./styles/ProductCard.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  
  const isFavorite = favorites.some((item) => item.id === product.id); 
  const [liked, setLiked] = useState(isFavorite);

  useEffect(() => {
    setLiked(isFavorite); 
  }, [isFavorite]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleToggleFavorite = () => {
    if (liked) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
    setLiked(!liked); 
  };

  if (!product) {
    return <div className="loader"></div>;
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <Link style={{ textDecoration: "none" }} to={`/product/${product.id}`}><img src={product.image_link} alt={product.name} /></Link>
      </div>
      <div className="product-info">
        <Link style={{ textDecoration: "none" }} to={`/product/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <p>${product.price}</p>
        <div className="product-buttons">
          <button className="cart" onClick={handleAddToCart}>
            <AiOutlineShoppingCart className="cart" />
          </button>
          <button
            className="like"
            onClick={handleToggleFavorite}
          >
            {liked ? <AiFillHeart className="like" /> : <AiOutlineHeart className="unlike" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
