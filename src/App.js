import React, { Component } from 'react';
import './App.css';
import OrderPage from './components/OrderPage';
import getMenuItems from './api/getMenuItems';

class App extends Component {
  state = {
    menuItems: [],
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

  _onAddItem = itemId => {
    this.setState(prevState => {
      const newOrderItems = prevState.orderItems.slice(0);
      newOrderItems.push(prevState.menuItems.find(item => item.id === itemId));
      return { orderItems: newOrderItems };
    });
  };

  onSubmitOrderForm = customerInfo => {
    this.setState({ customerInfo });
  };

  onClosedOrderSuccessMessage = () => {
    this.setState({
      customerInfo: null,
      orderItems: []
    });
  };

  componentDidMount() {
    getMenuItems().then(menuItems => {
      this.setState({ menuItems });
    });
  }
}

export default App;
