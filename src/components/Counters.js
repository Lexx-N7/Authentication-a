import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
      let {onDelete,onIncrement,onReset} = this.props
    return (
      <div>
        <button
          style={{ background: "#3498db", color: "#fff" }}
          onClick={onReset}
        >
          reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
