/* eslint-disable import/first */
//

//first, import menu thunk
import getMenuItemsThunk from './getMenuItemsThunk';
//

//2sd, import jest mock function for getMenuItems and getMenuItems form api.file
jest.mock('../../api/getMenuItems');
import getMenuItems from '../../api/getMenuItems';
//3rd import data to test
import data from '../../data/mock-data';
// 4th start testing your thunk, begin with adescribe block and then function and it statements
describe('getMenuItemsThunk', () => {
  it('Calls getNotes API, returns array of notes, and dispatches GET_MENU_ITEMS action', () => {
    const thunk = getMenuItemsThunk();
    expect(typeof thunk).toBe('function');
    //  5th want to test with promise all to get all menu items
    // getMenuItems.mockReturnValueOnce(Promise.resolve([...data.menuItems]));
    // mock the dispatch function, mock get State
    const dispatch = jest.fn();
    const getState = () => ({});
    // retrun thunk testing
    console.log(thunk(dispatch, getState), 'thunkkkkk');
    return thunk(dispatch, getState, {}).then(menuItems => {
      expect(getMenuItems).toBeCalled();
      expect(menuItems).toEqual([...data.menuItems]);
      expect(dispatch).toBeCalledWith({ type: 'GET_MENU_ITEMS', menuItems });
    });
  });
});
