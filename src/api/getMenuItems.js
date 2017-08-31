export default function getMenuItems() {
  // console.log('in get menu items');
  return fetch('/menu-items/data/menu-items.json')
    .then(response => response.json())
    .then(menuItems => {
      // console.log(menuItems, 'do i get here');
      return menuItems;
    });
}
