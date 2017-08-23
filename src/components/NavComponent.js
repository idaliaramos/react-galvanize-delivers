import React from 'react';

export default function NavComponent() {
  return (
    <nav>
      <div className="nav-wrapper blue darken-3">
        <a href="index.html" className="brand-logo center-on-small-only">
          Galvanize Delivers
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="order.html">Order Delivery</a>
          </li>
        </ul>
        <ul id="nav--next" className="left hide-on-large-only">
          <li>
            <a href="order.html">
              <i className="material-icons hide-on-large-only">menu</i>Order
              Delivery
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
