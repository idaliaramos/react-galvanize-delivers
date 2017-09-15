import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import OrderPage from '../../components/OrderPage';

import getMenuItemsThunk from '../thunks/getMenuItemsThunk';

function mapStateToProps(state, ownProps) {
  return {
    menuItems: state.menuItems,
    orderItems: state.orderItems,
    customerInfo: state.customerInfo
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getMenuItemsThunk()),
    onAddItem: itemId => dispatch({ type: 'Add_Menu_Item', itemId }),
    onSubmitOrderForm: ({ name, phone, address }) =>
      dispatch({
        type: 'Update_Customer_Info',
        name,
        phone,
        address
      }),
    // dispatch({ type: 'Order_Success_Message'}))
    onClosedOrderSuccessMessage: () =>
      dispatch({ type: 'Order_Success_Message' })
  };
}
const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(OrderPage);

//   onSubmitOrderForm = ({ name, phone, address }) => {
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
