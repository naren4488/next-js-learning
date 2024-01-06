'use client'
import { useRouter } from "next/navigation";
import React from "react";

const PlaceOrder = () => {
  const route = useRouter();
  const handleClick = () => {
    console.log("order placed");
    route.push("/");
  };

  return (
    <div>
      <h1>Place your order</h1>
      <button onClick={handleClick}>Place order</button>
    </div>
  );
};

export default PlaceOrder;
