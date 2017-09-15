export default function rootReducer(
  currentState = {
    menuItems: [],
    orderItems: [],
    customerInfo: null
  },
  action
) {
  switch (action.type) {
    case 'GET_MENU_ITEMS':
      return {
        ...currentState,
        menuItems: action.menuItems
      };

    case 'Add_Menu_Item':
      return {
        ...currentState,
        orderItems: [
          ...currentState.orderItems,
          currentState.menuItems.find(item => {
            return item.id === action.itemId;
          })
        ]
      };

    case 'Update_Customer_Info':
      return {
        ...currentState,
        customerInfo: {
          name: action.name,
          phone: action.phone,
          address: action.address
        }
      };

    case 'Order_Success_Message':
      return {
        ...currentState,
        customerInfo: action.customerInfo,
        orderItems: action.orderItems
      };

    default:
      return currentState;
  }
}
