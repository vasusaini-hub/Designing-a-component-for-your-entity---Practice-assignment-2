import React from 'react';

const ViewProductButton = () => {
  // Static dummy button text
  const buttonText = 'View Product';

  // Inline styling for the button (optional)
  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    border: 'none',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return <button style={buttonStyle}>{buttonText}</button>;
};

export default ViewProductButton;