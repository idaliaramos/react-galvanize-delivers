import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderTableComponent from './OrderTableComponent';
// import MenuComponent from './MenuComponent';

storiesOf('OrderTableComponent', module).add('Happy Path', () =>
  <OrderTableComponent
    id="order table component 1"
    items={[
      {
        id: 1,
        name: 'Menu Item 1',
        price: 9.99
      },
      {
        id: 2,
        name: 'Menu Item 2',
        price: 4.99
      },
      {
        id: 3,
        name: 'Menu Item 1',
        price: 9.99
      }
    ]}
  />
);
