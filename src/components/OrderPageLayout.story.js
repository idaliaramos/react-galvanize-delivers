import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent';
import OrderFormComponent from './OrderFormComponent';
import OrderTableComponent from './OrderTableComponent';

let data = {
  menuItems: [
    {
      id: 101,
      name: 'Some Item A',
      price: 9.99,
      imagePath: '//via.placeholder.com/300x200'
    },
    {
      id: 102,
      name: 'Some Item B',
      price: 8.99,
      imagePath: '//via.placeholder.com/300x200'
    },
    {
      id: 103,
      name: 'Some Item C',
      price: 7.99,
      imagePath: '//via.placeholder.com/300x200'
    },
    {
      id: 104,
      name: 'Some Item D',
      price: 7.99,
      imagePath: '//via.placeholder.com/300x200'
    }
  ],
  orderItems: [
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
  ],
  customerInfo: {
    name: 'Nestor Toro',
    phone: '(650) 533-8676',
    address: '123 Main Street, Oakland, CA'
  }
};
storiesOf('OrderPageLayout', module).add('Happy Path', () =>
  <OrderPageLayout>
    <MenuComponent items={data.menuItems} />
    <OrderTableComponent items={data.orderItems} />
    <OrderFormComponent defaultCustomerInfo={data.customerInfo} />
  </OrderPageLayout>
);
