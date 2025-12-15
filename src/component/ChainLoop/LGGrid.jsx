// LGGrid.jsx
import React from "react";
import DiamondItem from "../DiamondItem/DiamondItem";

export default function LGGrid({ items }) {
  return (
    <div className="hidden lg:grid xl:hidden grid-cols-4 gap-6 px-10 mx-auto justify-center my-6">
      {items.map((item, i) => {
        const specialMargin =
          i === 4 || i === 5 || i === 6 ? "lg:-mt-[40px] lg:ml-[120px]" : "";
        return <DiamondItem key={i} item={item} specialMargin={specialMargin} />;
      })}
    </div>
  );
}
