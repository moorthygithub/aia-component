// XLGrid.jsx
import React from "react";
import DiamondItem from "../DiamondItem/DiamondItem";

export default function XLGrid({ items }) {
  return (
    <div className="hidden xl:grid grid-cols-7 px-10 min-w-max mx-auto justify-center my-6">
      {items.map((item, i) => (
        <DiamondItem key={i} item={item} />
      ))}
    </div>
  );
}
