import React, { Component } from "react";

class Counter extends Component {
  render() {
      var {id,value} = this.props.counter
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button onClick={()=>this.props.onIncrement(this.props.counter)}>add</button>
        <button style={{background: 'red',color: '#fff'}} onClick={()=>this.props.onDelete(id)}>delete</button>
      </div>
    );
  }
  formatCount=()=>{
    return this.props.counter.value
  }
}

export default Counter;