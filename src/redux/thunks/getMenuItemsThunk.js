import getMenuItems from '../../api/getMenuItems';

export default function getMenuItemsThunk() {
  return (dispatch, getState, env) => {
    return getMenuItems().then(menuItems => {
      //   {
      //   databaseId: env.AIRTABLE_DATABASE_ID,
      //   token: env.AIRTABLE_TOKEN
      // }
      dispatch({ type: 'GET_MENU_ITEMS', menuItems });
      return menuItems;
    });
    // .catch(error => {
    //   dispatch({ type: 'GET_MENU_ITEMS_FAILED' });
    // });
  };
}
