import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

export default function Admin() {
  let [logout, setLogout] = useState(false);

  function handleTest() {
    setLogout(true);
    console.log(logout);
  }
  if (logout) {
    console.log("test");
    localStorage.removeItem("key");
    return <Redirect to="/logout" />;
  } else {
    return (
      <div>
        <h2 style={{color: '#3498db'}}>admin page</h2>
        <h4>only auth members</h4>
        <button  onClick={handleTest}>
          log out
        </button>
      </div>
    );
  }
}
