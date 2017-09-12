import React from 'react';

export default function MenuItemComponent({ item, onAddItem }) {
  function handleClick(e) {
    e.preventDefault();
    onAddItem(item.id);
    console.log('in the card action');
  }
  return (
    <div className="card s 12 m6 l7 MenuItemComponent">
      <div className="card-image">
        <img src={item.imagePath} alt={''} />
      </div>
      <div className="card-content">
        <h5 className="card-title">
          {item.name || 'N/A'}
        </h5>
        <p>
          {item.price ? `$${item.price.toFixed(2)}` : 'N/A'}
        </p>
      </div>
      <div className="card-action">
        <a href="a" onClick={handleClick}>
          ADD TO ORDER
        </a>
      </div>
    </div>
  );
}
