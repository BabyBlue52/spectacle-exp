import React, { useEffect, useState } from "react";
import FlipNumbers from "react-flip-numbers";

export default (props) => {
  const [number, setNumber] = useState("1");
  let currentPage = 0;

  function increment() { 
    if (currentPage === 5) {
      currentPage = 0;
    } else {
      currentPage = currentPage + 1;
      setNumber(currentPage.toString());
    }
  }

  useEffect(() => {
    // Timer
    // const interval = setInterval(() => {
    //   increment();
    // }, 2000);

    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-counter">
      <FlipNumbers
        height={21}
        width={21}
        background="white"
        play
        perspective={130}
        numbers={number}
      />
      <p className="page-max">
        <span className="slash">/</span>
        <span className="max">5</span>
      </p>
    </div>
  );
};
