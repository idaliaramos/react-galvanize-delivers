import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import OrderPageLayout from './components/OrderPageLayout';
// import MenuComponent from './components/MenuComponent';
// import OrderFormComponent from './components/OrderFormComponent';
// import OrderTableComponent from './components/OrderTableComponent';
import OrderPage from './components/OrderPage';

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

ReactDOM.render(
  <OrderPage
    menuItems={data.menuItems}
    orderItems={data.orderItems}
    customerInfo={data.customerInfo}
  />,
  document.getElementById('root')
);

// react dom .render (pagelayout)
//
//
// react layout in name.js put the slots with props.children defining the layout
//
// index.js is using the layout after render and passing the children you put the data elements names
