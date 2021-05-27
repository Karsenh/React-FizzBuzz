import React from "react";

const FizzBox = ({ fizzArr }) => {
  return (
    <div className="fizz-container">
      {fizzArr.map((item, index) => {
        return (
          <p className="fizz-card card-item" key={index}>
            {index + 1} {item}
          </p>
        );
      })}
    </div>
  );
};

export default FizzBox;
