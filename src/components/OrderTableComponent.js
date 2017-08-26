import React from 'react';
// import OrderTableComponent from './OrderTableComponent';

export default function OrderTableComponent({ orderItems }) {
  let subtotal = 0;
  console.log('order is', orderItems);
  if (orderItems !== 0)
    orderItems.reduce(function(sum, item) {
      subtotal = sum + item.price;
      return subtotal;
    }, 0);
  let tax = subtotal * 0.085;
  let total = subtotal + tax;

  console.log('this is the subtotal', subtotal);
  return (
    <div className=" row OrderTableComponent ">
      <table className="striped" id="currentOrderTable">
        <thead>
          <tr>
            <th>Item Name</th>
            <th />
            <th>Item Price</th>
          </tr>
        </thead>
        <tbody>
          {/* {items.map(item =>

            <tr key= {item.id}>
              <td className="right-align">
                {item.name}
              </td>
              <td className="right-align">
                {item.price}
              </td>
            </tr>
          )} */}
          {orderItems
            ? orderItems.map(item =>
                <tr key={item.id}>
                  <td>
                    {item.name}
                  </td>

                  <td />
                  <td>
                    {item.price}
                  </td>
                </tr>
              )
            : ''}
        </tbody>
        {/* <tfooter /> */}
      </table>
      <br />
      <br />

      <table className="total">
        <tbody>
          <tr>
            <td className="right-align">SubTotal</td>
            <td className="right-align" id="subTotal" data-total-amount="0">
              {`$${subtotal.toFixed(2)}`}
            </td>
          </tr>
          <tr>
            <td className="right-align">Tax</td>
            <td className="right-align" id="tax" data-total-tax="0">
              {`$${tax.toFixed(2)}`}
            </td>
          </tr>
          <tr>
            <td className="right-align">Total</td>
            <td className="right-align" id="total" data-total="0">
              {`$${total.toFixed(2)}`}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
