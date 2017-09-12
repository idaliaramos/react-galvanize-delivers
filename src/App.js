import React, { Component } from 'react';
import './App.css';
import OrderPage from './components/OrderPage';
import getMenuItems from './api/getMenuItems';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: [],
      orderItems: [],
      customerInfo: null
    };

    this.props.store.subscribe(() => {
      this.setState(this.props.store.getState());
    });
  }

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
  //first
  _onAddItem = itemId => {
    this.setState(prevState => {
      const newOrderItems = prevState.orderItems.slice(0);
      newOrderItems.push(prevState.menuItems.find(item => item.id === itemId));
      return { orderItems: newOrderItems };
    });
  };
  //2sd
  onSubmitOrderForm = customerInfo => {
    // this.setState({ customerInfo });
    this.props.store.dispatch({
      type: 'Update_Customer_Info'
    });
  };

  onClosedOrderSuccessMessage = () => {
    this.props.store.dispatch({
      type: 'Order_Success_Message'
    });
    // this.setState({
    //   customerInfo: null,
    //   orderItems: []
    // });
  };
  //3rd
  componentDidMount() {
    getMenuItems().then(menuItems => {
      this.setState({ menuItems });
    });
  }
}

export default App;
