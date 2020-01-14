import React, { Component } from "react";

class Navbar extends Component {
  handleReduce = () => {
    var values = this.props.counters.map(counter => counter.value)
    var result = values.reduce((total,num)=>{
        return total + num
    })
    return result
  };
  render() {
    return (
      <React.Fragment>
        <div style={navbarStyle}>
            <p >navbar</p>
            {' '}
            {this.handleReduce()}
        </div>
      </React.Fragment>
    );
  }
}

var navbarStyle = {
  height: "100px",
  color: "#fff",
  background: "#333",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export default Navbar;
