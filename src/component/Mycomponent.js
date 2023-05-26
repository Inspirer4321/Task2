import React, { useState } from "react";

const MyComponent = () => {
  const [isBlack, setIsBlack] = useState(false);

  const handleChangeColor = () => {
    setIsBlack(!isBlack);
  };

  const boxClassName = isBlack ? "container black" : "container";

  return (
    <div>
      <div className={boxClassName}>
        <h1>Render Props</h1>
        <p>
          I was built with two class components: a wrapper that handles state
          and state changing functions, and a child that uses that functionality.
        </p>
        <label>
          <input
            type="checkbox"
            checked={isBlack}
            onChange={handleChangeColor}
          />
        </label>
      </div>
    </div>
  );
};

export default MyComponent;
