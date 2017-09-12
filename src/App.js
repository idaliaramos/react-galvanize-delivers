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
  _onAddItem = itemId => {
    this.props.store.dispatch({ type: 'Add_Menu_Item', itemId });
  };
  onSubmitOrderForm = ({ name, phone, address }) => {
    // this.setState({ customerInfo });
    this.props.store.dispatch({
      type: 'Update_Customer_Info',
      name: name,
      phone: phone,
      address: address
    });
  };
  onClosedOrderSuccessMessage = () => {
    this.props.store.dispatch({
      type: 'Order_Success_Message'
    });
  };

  componentDidMount() {
    getMenuItems().then(menuItems => {
      this.props.store.dispatch({
        type: 'Get_Menu_Items',
        menuItems
      });
    });
  }
}

export default App;
