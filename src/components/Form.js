import React, { Component } from "react";

export default class Form extends Component {
  render() {
    let { country, city } = this.props.state;
    let { handleOnSubmit, handleOnChange } = this.props;
    return (
      <form onSubmit={handleOnSubmit}>
        <input
          name="city"
          value={city}
          onChange={handleOnChange}
          placeholder="city"
        />
        <input
          name="country"
          value={country}
          onChange={handleOnChange}
          placeholder="country"
        />
        <button type="submit">get weather</button>
      </form>
    );
  }
}
