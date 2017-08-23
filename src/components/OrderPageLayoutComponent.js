import React from 'react';
import MenuComponent from './MenuComponent';
import OrderTableComponent from './OrderTableComponent';
import OrderFormComponent from './OrderFormComponent';
import NavComponent from './NavComponent';

export default function OrderPageLayoutComponent(props) {
  return (
    <div>
      <NavComponent />
      <div className="row">
        <div className="col s12 m12 l7">
          <MenuComponent items={props.menuItems} />
        </div>
        <div className="col s12 m12 l5">
          <OrderTableComponent items={props.orderItems} />
          <OrderFormComponent defaultCustomerInfo={props.customerInfo} />
        </div>
      </div>
    </div>
  );
}
