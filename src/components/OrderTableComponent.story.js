import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderTableComponent from './OrderTableComponent';
import MenuComponent from './MenuComponent';

// storiesOf('OrderTableComponent', module).add('Happy Path', MenuComponent =>
//   <OrderTableComponent
//     items={[
//       {
//         name: MenuComponent.name,
//         price: MenuComponent.price
//       }
//     ]}
//   />
// );

storiesOf('OrderTableComponent', module).add('Happy Path', () =>
  <OrderTableComponent
    items={[
      {
        name: 'Menu Item 1',
        price: 9.99
      },
      {
        name: 'Menu Item 2',
        price: 4.99
      },
      {
        name: 'Menu Item 1',
        price: 9.99
      }
    ]}
  />
);
