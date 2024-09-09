import React from 'react';
import './styles/NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Page Not Found</p>
      <a href="/" className="notfound-link">Go Back to Home</a>
    </div>
  );
};

export default NotFound;
