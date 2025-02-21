// write product card here
import React from 'react';
import ViewProductButton from './button.jsx'; // Adjust the path if necessary

const Productcard = () => {
  // Static dummy data for the product details
  const productImage =
    'https://i5.walmartimages.com/asr/cdf2dcc6-6968-4739-8508-eb8e530f638f_1.a878cce0c6552705386dbe7407c723ef.jpeg';
  const productName = 'Monitors';
  const price = '$299.99';

  // Inline styling for the product card (optional)
  const cardStyle = {
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const titleStyle = {
    fontSize: '18px',
    margin: '16px 0 8px',
  };

  const priceStyle = {
    fontSize: '16px',
    color: '#333',
    marginBottom: '16px',
  };

  return (
    <div style={cardStyle}>
      <img src={productImage} alt="Product" style={imageStyle} />
      <h2 style={titleStyle}>{productName}</h2>
      <p style={priceStyle}>{price}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;