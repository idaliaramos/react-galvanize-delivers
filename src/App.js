import React, { Component } from 'react';
import './App.css';
import OrderPage from './OrderPageComponent';

class App extends Component {
  state = {
    menuItems: null,
    orderItems: [],
    customerInfo: null
  };
  render() {
    return (
      <OrderPage
        menuItems={this.menuItems}
        orderItems={this.orderItems}
        customerInfo={this.customerInfo}
        onAddItem={this.onAddItem}
        onSubmitOrderForm={this.onSubmitOrderForm}
        onClosedOrderSuccessMessage={this.onClosedOrderSuccessMessage}
      />
    ), document.getElementById('root');
  }
  _onAddItem = item => {
    // console.log('this should fire on click', itemId);
    this.orderItems.push(this.menuItems.find(item => item.id === this.itemId));
  };
  onSubmitOrderForm({ name, phone, address }) {
    this.customerInfo = { name, phone, address };
    console.log(this.customerInfo);
  }
  onClosedOrderSuccessMessage() {
    this.customerInfo = null;
    this.orderItems = [];
  }
}

export default App;
