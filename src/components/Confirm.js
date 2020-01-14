import React, { Component } from "react";

export default class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    this.props.prevStep();
    // this.props.storage(2)
  };
  render() {
      let {firstname, lastname, email, occupation, city, bio} = this.props.values
    // let {
    //   values: { firstname, lastname, email, occupation, city, bio }
    // } = this.props;
    return (
      <div>
        <h2>Confirm</h2>
        <form onSubmit={this.continue}>
          <ul>
            <li>{firstname}</li>
            <li>{lastname}</li>
            <li>{email}</li>
            <li>{occupation}</li>
            <li>{city}</li>
            <li>{bio}</li>
          </ul>
          <button>confirm</button>
        </form>
        <button onClick={this.back}>back</button>
      </div>
    );
  }
}
