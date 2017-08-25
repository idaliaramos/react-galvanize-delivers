import React from 'react';
import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent';
import OrderFormComponent from './OrderFormComponent';
import OrderTableComponent from './OrderTableComponent';

export default function OrderPage({ menuItems, orderItems, customerInfo }) {
  return (
    <div className="OrderPage">
      <OrderPageLayout>
        <MenuComponent items={menuItems} />
        <OrderTableComponent items={orderItems} />
        <OrderFormComponent defaultCustomerInfo={customerInfo} />
      </OrderPageLayout>
    </div>
  );
}
