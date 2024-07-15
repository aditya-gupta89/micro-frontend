import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import  {mount}  from "marketApp/MarketingApp";

const MarketingApp = () => {
  const ref = useRef();
  console.log(mount)
    useEffect(() => {
      mount(ref.current);
    });
  return <div ref={ref}></div>;
};

export default MarketingApp;
