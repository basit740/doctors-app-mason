import React from "react";

const TextInput = ({ onChange, value,type }) => {
  return (
    <input
      class="govuk-input"
      onChange={onChange}
      value={value}
      id="event-name"
      name="event-name"
      type={type}
    />
  );
};

export default TextInput;
