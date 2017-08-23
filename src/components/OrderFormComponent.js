import React from 'react';

export default function OrderFormComponent({ defaultCustomerInfo }) {
  return (
    <form className="row">
      <div className="row OrderFormComponent">
        <div className="input-field ">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate" required />
          <label for="icon_prefix">First Name</label>
        </div>
        <div className="input-field col s12 ">
          <i className="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" className="validate" />
          <label for="icon_telephone">Telephone</label>
        </div>
        <div className="input-field col s12 ">
          <i className="material-icons prefix">home</i>
          <input id="icon_home" type="text" className="validate" required />
          <label for="icon_home">Address</label>
        </div>
      </div>

      <a
        className="waves-effect waves-light btn-large "
        center
        id="buttonOrder">
        Place Order
      </a>
    </form>
  );
}
