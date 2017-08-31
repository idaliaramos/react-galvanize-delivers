import React, { Component } from 'react';
import './App.css';
import OrderPage from './components/OrderPage';

class App extends Component {
  state = {
    menuItems: null,
    orderItems: [],
    customerInfo: null
  };

  render() {
    return (
      <OrderPage
        menuItems={this.state.menuItems}
        orderItems={this.state.orderItems}
        customerInfo={this.state.customerInfo}
        onAddItem={this._onAddItem}
        onSubmitOrderForm={this.onSubmitOrderForm}
        onClosedOrderSuccessMessage={this.onClosedOrderSuccessMessage}
      />
    );
  }

  _addItem = itemId => {
    this.setState(prevState => {
      const newOrderItems = prevState.orderItems.slice(0);

      return { orderItems: newOrderItems };
    });
  };
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
