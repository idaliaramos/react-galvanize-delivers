import React, { Component } from 'react';
import { Provider } from 'react-redux';

import setupStore from './redux/setupStore';
import OrderPageContainer from './redux/containers/OrderPageContainer';

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <OrderPageContainer />
        </Provider>
      </div>
    );
  }
}

// import React, { Component } from 'react';
// import './App.css';
// import OrderPage from './components/OrderPage';
// // import getMenuItems from './api/getMenuItems';
// import getMenuItemsThunk from './redux/thunks/getMenuItemsThunk';
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       menuItems: [],
//       orderItems: [],
//       customerInfo: null
//     };
//
//     this.props.store.subscribe(() => {
//       this.setState(this.props.store.getState());
//     });
//   }
//
//   render() {
//     return (
//       <OrderPage
//         menuItems={this.state.menuItems}
//         orderItems={this.state.orderItems}
//         customerInfo={this.state.customerInfo}
//         onAddItem={this._onAddItem}
//         onSubmitOrderForm={this.onSubmitOrderForm}
//         onClosedOrderSuccessMessage={this.onClosedOrderSuccessMessage}
//       />
//     );
//   }
//   _onAddItem = itemId => {
//     this.props.store.dispatch({ type: 'Add_Menu_Item', itemId });
//   };
//   onSubmitOrderForm = ({ name, phone, address }) => {
//     // this.setState({ customerInfo });
//     this.props.store.dispatch({
//       type: 'Update_Customer_Info',
//       name: name,
//       phone: phone,
//       address: address
//     });
//   };
//   onClosedOrderSuccessMessage = () => {
//     this.props.store.dispatch({
//       type: 'Order_Success_Message'
//     });
//   };
//
//   componentDidMount() {
//     this.props.store.dispatch(getMenuItemsThunk());
//     // getMenuItems()
//     // .then(menuItems => {
//     //   this.props.store.dispatch({
//     //     type: 'Get_Menu_Items',
//     //     menuItems
//     //   });
//     // });
//   }
// }
//
// export default App;
