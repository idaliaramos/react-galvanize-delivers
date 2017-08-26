import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './MenuItemComponent';
import './MenuComponent.story.css';
import './MenuItemComponent.story.css';

storiesOf('MenuItemComponent', module)
  .add('Complete item passed in', () =>
    <MenuItemComponent
      key="menu item component 1"
      item={{
        name: 'Item A',
        price: 9.99,
        imagePath: '//via.placeholder.com/300x200'
      }}
    />
  )
  .add('Incomplete item passed in', () =>
    <MenuItemComponent
      key="menu item component 2"
      item={{
        imagePath: '//via.placeholder.com/300x200'
      }}
    />
  )
  .add('Empty item object passed in', () => <MenuItemComponent item={{}} />)
  .add('No item passed in', () => <div>no data to show</div>)
  .add('Testing', () =>
    <MenuItemComponent
      key="menu item component 1"
      item={{
        id: 1,
        name: 'Item A',
        price: 9.99,
        imagePath: '//via.placeholder.com/300x200'
      }}
      onAddItem={itemId => itemId}
    />
  );
