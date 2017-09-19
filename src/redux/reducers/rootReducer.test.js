import rootReducer from './rootReducer';

// import deepFreeze from 'deep-freeze';

import data from '../../data/mock-data';

describe('rootReducer', () => {
  it('action.type GET_MENU_ITEMS', () => {
    const action = {
      type: 'GET_MENU_ITEMS',
      menuItems: data.menuItems,
      customerInfo: null,
      orderItems: []
    };
    const currentState = {
      menuItems: null,
      customerInfo: null,
      orderItems: []
    };

    // deepFreeze(currentState);

    const nextState = {
      menuItems: action.menuItems,
      customerInfo: null,
      orderItems: []
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });

  // it('action.type Update_Customer_Info', () => {
  //   const action = {
  //     type: 'Update_Customer_Info',
  //     menuItems: data.menuItems,
  //     customerInfo: null,
  //     orderItems: [...data.orderItem]
  //   };
  //   const currentState = {
  //     menuItems: data.customerInfo,
  //     customerInfo: null,
  //     orderItems: [...data.orderItem]
  //   };
  //
  //   // deepFreeze(currentState);
  //
  //   const nextState = {
  //     menuItems: data.menuItems,
  //     customerInfo: action.customerInfo,
  //     orderItems: [...data.orderItem]
  //   };
  //
  //   expect(rootReducer(currentState, action)).toEqual(nextState);
  // });
});
