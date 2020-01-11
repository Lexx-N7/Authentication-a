import React,{ useState,useEffect } from "react";
import { Redirect } from "react-router-dom";

export default function Login() {
  let [state, setState] = useState({
    username: "",
    password: "",
    loggedIn: false
  });

  useEffect(()=>{
    let key = localStorage.getItem('key')
    key === 'heresSomeKey' && setState({loggedIn:true})
  },[])

  function handleOnChange(e) {
    let { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (state.username === "abc" && state.password === "123") {
      setState({
          loggedIn: true
      });
      localStorage.setItem('key','heresSomeKey')
    }
  }
 
  if (state.loggedIn) {
    return <Redirect to="/admin" />;
    // window.location.href ='/admin'
  } else {
    return (
      <form>
          <h2>Login Page</h2>
        <input
          name="username"
          value={state.username}
          placeholder="username"
          onChange={handleOnChange}
        />
        <input
          name="password"
          value={state.password}
          placeholder="password"
          onChange={handleOnChange}
        />
        <button type="submint" onClick={handleSubmit}>
          submit
        </button>
      </form>
    );
  }
}
