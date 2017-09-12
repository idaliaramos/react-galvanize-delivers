import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuItemComponent from './MenuItemComponent';
import renderer from 'react-test-renderer';
// import { assert } from 'chai';

const item = {
  name: 'Some Item A',
  price: 9.99
};
//
// const menuItems = [
//   {
//     name: 'Smoked Swine',
//     price: 8.99,
//     imagePath: '//via.placeholder.com/300x200',
//     id: 1
//   },
//   {
//     name: 'Royale with Cheese',
//     price: 11.99,
//     imagePath: '//via.placeholder.com/300x200',
//     id: 2
//   },
//   {
//     name: 'Arugula Pie',
//     price: 14.99,
//     imagePath: '//via.placeholder.com/300x200',
//     id: 3
//   },
//   {
//     name: 'Ice Cream Biscuit',
//     price: 7.99,
//     imagePath: '//via.placeholder.com/300x200',
//     id: 4
//   }
// ];

describe('a shallow test', () => {
  const onAddItem = jest.fn();
  const shallowWrapper = shallow(
    <MenuItemComponent onAddItem={onAddItem} item={item} />
  );

  it('checks to see item price exists', () => {
    expect(
      shallowWrapper.contains(
        <p>
          {item.price ? `$${item.price.toFixed(2)}` : 'N/A'}
        </p>
      )
    ).toBe(true);
  });
  it('checks to see item name exists', () => {
    expect(
      shallowWrapper.contains(
        <h5 className="card-title">
          {item.name || 'N/A'}
        </h5>
      )
    ).toBe(true);
  });

  it('should test if onAddItem function was fired', () => {
    const onAddItem = jest.fn();
    let menuItemC = mount(
      <MenuItemComponent onAddItem={onAddItem} item={item} />
    );
    console.log(Object.keys(menuItemC));
    let found = menuItemC.find('.card-action');
    console.log('found', found);
    found.simulate('click');
    // .simulate('click');
    expect(onAddItem).toHaveBeenCalled();
  });

  it('renders a snapshot', () => {
    const tree = renderer.create(<MenuItemComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
