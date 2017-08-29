import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OrderPage from './components/OrderPage';

let data = {
  key: 'data',
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
  ]
  // orderItems: [
  //   {
  //     id: 102,
  //     name: 'Menu Item 1',
  //     price: 9.99
  //   },
  //   {
  //     id: 102,
  //     name: 'Menu Item 2',
  //     price: 4.99
  //   },
  //   {
  //     id: 103,
  //     name: 'Menu Item 1',
  //     price: 9.99
  //   }
  // ],
};

let customerInfo = null;
let orderItems = [];
function onAddItem(itemId) {
  console.log('this should fire on click', itemId);
  orderItems.push(data.menuItems.find(item => item.id === itemId));
  render();
}
function onSubmitOrderForm({ name, phone, address }) {
  customerInfo = { name, phone, address };
  console.log(customerInfo);
  render();
}
function onClosedOrderSuccessMessage() {
  customerInfo = null;
  orderItems = [];
  render();
}

function render() {
  ReactDOM.render(
    <OrderPage
      menuItems={data.menuItems}
      orderItems={orderItems}
      customerInfo={customerInfo}
      onAddItem={onAddItem}
      onSubmitOrderForm={onSubmitOrderForm}
      onClosedOrderSuccessMessage={onClosedOrderSuccessMessage}
    />,
    document.getElementById('root')
  );
}
render();

// react dom .render (pagelayout)
//
//
// react layout in name.js put the slots with props.children defining the layout
//
// index.js is using the layout after render and passing the children you put the data elements names
