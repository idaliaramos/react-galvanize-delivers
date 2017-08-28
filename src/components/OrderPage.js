import React from 'react';
import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent';
import OrderFormComponent from './OrderFormComponent';
import OrderTableComponent from './OrderTableComponent';

export default function OrderPage({
  menuItems,
  orderItems,
  customerInfo,
  onAddItem
}) {
  console.log('order is ', orderItems);
  return (
    <div className="OrderPage">
      <OrderPageLayout>
        <MenuComponent items={menuItems} onAddItem={onAddItem} />
        <OrderTableComponent orderItems={orderItems} />
        <OrderFormComponent defaultCustomerInfo={customerInfo} />
      </OrderPageLayout>
    </div>
  );
}
