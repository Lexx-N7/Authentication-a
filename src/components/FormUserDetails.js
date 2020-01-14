import React, { Component } from "react";

export default class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    let {values,handleChange} = this.props
    return (
      <div>
        <h2>enter user details</h2>
        <form onSubmit={this.continue}>
          <input
            type="text"
            name="firstname"
            placeholder='firstname'
            onChange={handleChange}
            value={values.firstname}
          />
          <input
            type="text"
            name="lastname"
            placeholder='lastname'
            onChange={handleChange}
            value={values.lastname}
          />
          <input
            type="text"
            name="email"
            placeholder='email'
            onChange={handleChange}
            value={values.email}
          />
          <button>continue</button>
        </form>
      </div>
    );
  }
}
