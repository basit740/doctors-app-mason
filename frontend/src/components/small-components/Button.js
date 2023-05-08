import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button
      className="govuk-button"
      data-module="govuk-button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
