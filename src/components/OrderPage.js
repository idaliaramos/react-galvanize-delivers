import React from 'react';
import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent';
import OrderFormComponent from './OrderFormComponent';
import OrderTableComponent from './OrderTableComponent';
import OrderSuccessMessageComponent from './OrderSuccessMessageComponent';
export default function OrderPage({
  menuItems,
  orderItems,
  customerInfo,
  onAddItem,
  onSubmitOrderForm,
  onClosedOrderSuccessMessage
}) {
  // console.log('order is ', orderItems);
  return (
    <div className="OrderPage">
      <OrderPageLayout>
        <MenuComponent items={menuItems} onAddItem={onAddItem} />
        <OrderTableComponent orderItems={orderItems} />
        {customerInfo
          ? <OrderSuccessMessageComponent
              customerInfo={customerInfo}
              onClosedOrderSuccessMessage={onClosedOrderSuccessMessage}
            />
          : <OrderFormComponent
              orderItems={orderItems}
              onSubmit={onSubmitOrderForm}
            />}
      </OrderPageLayout>
    </div>
  );
}
