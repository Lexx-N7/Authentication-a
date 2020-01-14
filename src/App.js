import React, { Component } from "react";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  componentWillMount = () => {
    let counters = JSON.parse(localStorage.getItem("counters"));
    counters && this.setState({ counters });
  };
  handleDelete = counterId => {
    var counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters },this.setStorage);
  };
  handleIncrement = counter => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters }, this.setStorage);
  };
  handleReset = () => {
    this.setState({
      counters: this.state.counters.map(counter => {
        counter.value = 0;
        return counter;
      })
    },this.setStorage);
  };
  setStorage = () => {
    localStorage.setItem("counters", JSON.stringify(this.state.counters));
  };
  render() {
    return (
      <React.Fragment>
        <Navbar counters={this.state.counters} />
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default App;
