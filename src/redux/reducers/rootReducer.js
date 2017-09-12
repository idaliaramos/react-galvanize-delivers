export default function rootReducer(
  currentState = {
    menuItems: [],
    orderItems: [],
    customerInfo: null
  },
  action
) {
  switch (action.type) {
    case 'Add_Menu_Item':
      return { menuItems: currentState.menuItems };

    case 'Add_Order-Items':
      //   return { orderItems:[ ...currentState.orderItems ]};

      return {
        orderItems: [
          ...currentState.orderItems,
          currentState.menuItems.find(item => {
            console.log('in the ne', item);
            return item.id === action.itemId;
          })
        ]
      };

    // newOrderItems.push(prevState.menuItems.find(item => item.id === itemId));
    // return { orderItems: newOrderItems }

    case 'Update_Customer_Info':
      return { customerInfo: currentState.customerInfo };

    case 'Order_Success_Message':
      return { customerInfo: currentState.customerInfo };

    default:
      return currentState;
  }
}
