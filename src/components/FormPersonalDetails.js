import React, { Component } from "react";

export default class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    this.props.prevStep();
  };
  render() {
    let { values, handleChange } = this.props;
    return (
      <div>
        <h2>enter personal details</h2>
        <form onSubmit={this.continue}>
          <input
            type="text"
            name="occupation"
            placeholder="occupation"
            onChange={handleChange}
            value={values.occupation}
          />
          <input
            type="text"
            name="city"
            placeholder="city"
            onChange={handleChange}
            value={values.city}
          />
          <input
            type="text"
            name="bio"
            placeholder="bio"
            onChange={handleChange}
            value={values.bio}
          />
          <button>continue</button>
        </form>
        <button onClick={this.back}>back</button>
      </div>
    );
  }
}
