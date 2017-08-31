import React from 'react';
import MenuItemComponent from './MenuItemComponent';

export default function MenuComponent({ items, onAddItem }) {
  if (Array.isArray(items)) {
    return (
      <div className="MenuComponent">
        {items.map(item =>
          <MenuItemComponent key={item.id} item={item} onAddItem={onAddItem} />
        )}
      </div>
    );
  } else {
    return <p>loading</p>;
  }
}
