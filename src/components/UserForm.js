import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export default class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state =  {
      step: 1,
      firstname: "",
      lastname: "",
      email: "",
      occupation: "",
      city: "",
      bio: ""
    };
  }
 
  componentWillMount = () => {
    let test = JSON.parse(localStorage.getItem("test"));
    this.setState({ ...test });
  };

  nextStep = () => {
    let { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  prevStep = () => {
    let { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  componentWillUpdate =(nextProps,nextState)=>{
    localStorage.setItem("test", JSON.stringify(nextState));
  }

  render() {
    let { step } = this.state;
    let { firstname, lastname, email, occupation, city, bio } = this.state;
    let values = { firstname, lastname, email, occupation, city, bio };
    // let values = {}
    // for(let key in this.state){
    //    if(key !== 'step') values[key] = values[key]
    // }

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            storage={this.storage}
            values={values}
          />
        );
        break;
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            storage={this.storage}
            values={values}
          />
        );
        break;
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            storage={this.storage}
            values={values}
          />
        );
        break;
      case 4:
        return <Success />;
        break;
    }
  }
}
