import React, { useState } from "react";
import styled from "styled-components";

export default function SearchBar({ handleSubmit }) {
  let [search, setSearch] = useState("test");

  let onSubmit = e => {
    e.preventDefault();
    handleSubmit(search);
  };
  return (
    <StyledForm onSubmit={onSubmit}>
      <input onChange={e => setSearch(e.target.value)} />
      <button type="submit">search</button>
    </StyledForm>
  );
}

let StyledForm = styled.form`
  width: 70%;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr auto;
  input {
    padding: 0 8px;
    height: 30px;
  }
`;
