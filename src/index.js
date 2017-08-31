import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import OrderPage from './components/OrderPage';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));

// let customerInfo = null;
// let orderItems = [];
// function onAddItem(itemId) {
//   console.log('this should fire on click', itemId);
//   orderItems.push(data.menuItems.find(item => item.id === itemId));
//   render();
// }
// function onSubmitOrderForm({ name, phone, address }) {
//   customerInfo = { name, phone, address };
//   console.log(customerInfo);
//   render();
// }
// function onClosedOrderSuccessMessage() {
//   customerInfo = null;
//   orderItems = [];
//   render();
// }
//
// function render() {
//   ReactDOM.render(
//     <OrderPage
//       menuItems={data.menuItems}
//       orderItems={orderItems}
//       customerInfo={customerInfo}
//       onAddItem={onAddItem}
//       onSubmitOrderForm={onSubmitOrderForm}
//       onClosedOrderSuccessMessage={onClosedOrderSuccessMessage}
//     />,
//     document.getElementById('root')
//   );
// }
// render();

// react dom .render (pagelayout)
//
//
// react layout in name.js put the slots with props.children defining the layout
//
// index.js is using the layout after render and passing the children you put the data elements names
