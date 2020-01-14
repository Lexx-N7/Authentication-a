import React from "react";

export default function Recipe(props) {
  let index = 0;
  const { label, image, colories, ingredients } = props.recipe;
  return (
    <div>
      <h1>test: {label}</h1>
      <img src={image} alt="" />
      <ol>
        {ingredients.map(each => (
          <li key={index++}>{each.text}</li>
        ))}
      </ol>
    </div>
  );
}
