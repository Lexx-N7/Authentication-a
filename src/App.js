import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "107afa8656549d2ea1960d06be351f87";

export default class App extends Component {
  state = {
    country: "",
    city: "",
    temperature: undefined,
    error: undefined,
    load: false
  };

  getWeather = async e => {
    // e.preventDefault();
    // const country = e.target.elements.country.value;
    // const city = e.target.elements.city.value;
    this.setState({load: true})
    let {city,country} = this.state
    try {
      var response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
      );
      var data = await response.json();
      var { temp, humidity, pressure } = data.main;
       this.setState({
        country: data.sys.country,
        city: data.name,
        temperature: temp
      });
      console.log(data);
    } catch (error) {
      this.setState({
        error: `required: ${error}`
      });
    }
  };

  handleOnSubmit = (e)=>{
    e.preventDefault();
    this.getWeather()
  }

  handleOnChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form
          state={this.state}
          getWeather={this.getWeather}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
        <Weather data={this.state} />
      </React.Fragment>
    );
  }
}
