import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeFavorite } from '../features/favorites/favoritesSlice';
import './styles/Favorites.css'; 

const Favorites: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const dispatch = useDispatch();

  return (
    <div className="favorites-container">
      <h1 className="favorites-title">Favorites</h1>
      {favorites.length > 0 ? (
        <ul className="favorites-list">
          {favorites.map((item) => (
            <li key={item.id} className="favorites-item">
              <img src={item.image_link} alt={item.name} className="favorites-image" />
              <div className="favorites-info">
                <h3 className="favorites-name">{item.name}</h3>
                <p className="favorites-price">${item.price}</p>
                <button
                  onClick={() => dispatch(removeFavorite(item.id))}
                  className="favorites-remove-button"
                >
                  Remove from Favorites
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="favorites-empty">You have no favorite items yet.</p>
      )}
    </div>
  );
};

export default Favorites;
