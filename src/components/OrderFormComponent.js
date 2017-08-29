import React from 'react';

export default class OrderFormComponent extends React.Component {
  state = {
    hasValidationError: false
  };

  static defaultProps = {
    onSubmit: () => {}
  };

  render() {
    return (
      <form className="row" onSubmit={this._handleSubmit}>
        <div className="row OrderFormComponent">
          <div className="input-field ">
            <i className="material-icons prefix">account_circle</i>
            <input
              id="icon_prefix"
              type="text"
              className="validate"
              placeholder="Name"
              required
              defaultValue=""
            />
            {/* <label for="icon_prefix">First Name</label> */}
          </div>
          <div className="input-field col s12 ">
            <i className="material-icons prefix">phone</i>
            <input
              id="icon_telephone"
              type="tel"
              className="validate"
              placeholder="Phone Number"
              defaultValue=""
            />
            {/* <label for="icon_telephone">Telephone</label> */}
          </div>
          <div className="input-field col s12 ">
            <i className="material-icons prefix">home</i>
            <input
              id="icon_home"
              type="text"
              className="validate"
              placeholder="Address"
              required
              defaultValue=""
            />
            {/* <label for="icon_home">Address</label> */}
          </div>
        </div>

        <button
          type="submit"
          className="waves-effect waves-light btn-large "
          id="buttonOrder">
          Place Order
        </button>
      </form>
    );
  }
  _handleSubmit = event => {
    // const onSubmit = this.props.onSubmit || (() => {}); // See defaultProps above
    const { onSubmit } = this.props;
    event.preventDefault();
    const $form = event.target;
    const name = $form.icon_prefix.value.trim();
    const address = $form.icon_telephone.value.trim();
    const phone = $form.icon_home.value.trim();
    // console.log({ name, address, phone });

    if (name && address && phone) {
      onSubmit({ name, address, phone });
    } else {
      this.setState({
        hasValidationError: true
      });
    }
  };
}
