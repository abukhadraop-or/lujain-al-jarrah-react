/* eslint-disable react/prop-types */
import React from "react";
import { Paragraph } from "components/FilterSort/styles";

export default function Select({ paragraph, data, id }) {
  return (
    <label htmlFor={id}>
      <Paragraph>{paragraph} </Paragraph>
      <select name={id} id={id}>
        {data.map((item) => (
          <option value={item.value}>{item.name}</option>
        ))}
      </select>
    </label>
  );
}
