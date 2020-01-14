import React from "react";

export default function Weather(props) {
  var { load,country, city, temperature,error } = props.data;
  return (
    <div>
      {load && country && city && (
        <div>
          <p>location: {(country, city)}</p>
          <p>temperature: {temperature}</p>
        </div>
      )}
      {error && <p>error: {error}</p> }
    </div>
  );
}
