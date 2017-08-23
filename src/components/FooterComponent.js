import React from 'react';

export default function FooterComponent() {
  return (
    <footer className="pagefooter">
      <div className="row">
        <div className="col s12 m4 l4">
          <h5 className="white-text">Galvanize </h5>
          <p className="grey-text text-lighten-4">Fine Dining, Delivered</p>
        </div>
        <div className="col l4 offset-l2 s12">
          <ul>
            <li>
              <a className="grey-text text-lighten-3" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="order.html">
                Order Delivery
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          © 2016 Galvanize Delivers
          <a className="deep-orange-text.text-accent-5" href="#!" />
        </div>
      </div>
    </footer>
  );
}
