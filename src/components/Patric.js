import React, { useState } from "react";

const Patric = () => {
  const mapPatric = {
    1: "one",
    2: "two",
    3: "three",
  };
  const [showMap, setShowMap] = useState(false);
  const handleClickPatric = () => {
    setShowMap(!showMap);
  };

  return (
    <div>
      <h3>Patric's Components</h3>
      {showMap &&
        Object.entries(mapPatric).map(([key, value]) => (
          <div key={key}>
            <p>{key}</p>
            <p>{value}</p>
          </div>
        ))}
      <button onClick={handleClickPatric}>Click</button>
    </div>
  );
};

export default Patric;
