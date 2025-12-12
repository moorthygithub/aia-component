import React, { useEffect, useState } from "react";

const items = [
  {
    title: "Placements",
    img: "https://christuniversity.in/uploads/aupportasistance/thumb/cam-adventure_3_20250508064205..png",
  },
  {
    title: "Christ Consulting",
    img: "https://christuniversity.in/uploads/aupportasistance/thumb/cam-adventure_6_20250508064226..png",
  },
  {
    title: "Admissions",
    img: "https://christuniversity.in/uploads/aupportasistance/thumb/admission_20251006123836..png",
  },
  {
    title: "Health Services",
    img: "https://christuniversity.in/uploads/aupportasistance/thumb/cam-adventure_5_20250508064241..png",
  },
  {
    title: "Examinations",
    img: "https://christuniversity.in/uploads/aupportasistance/thumb/cam-adventure_4_20250508064256..png",
  },
  {
    title: "Student Council",
    img: "https://christuniversity.in/uploads/aupportasistance/thumb/cam-adventure_6_20250508064322..png",
  },
  {
    title: "Centres & Cells",
    img: "https://christuniversity.in/uploads/aupportasistance/thumb/cam-adventure_7_20250701052442..png",
  },
];

export default function ChainLoop() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);

  // Update visibleCount based on window width
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(2); // xs
      else if (width < 1024) setVisibleCount(3); // sm/md
      else setVisibleCount(3); // lg+
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);
  const next = () => setIndex((prev) => (prev + visibleCount) % items.length);
  const prev = () =>
    setIndex((prev) => (prev - visibleCount + items.length) % items.length);

  const visibleItems = Array.from({ length: visibleCount }).map(
    (_, i) => items[(index + i) % items.length]
  );
  return (
    <div className="w-full py-8 bg-[url('https://christuniversity.in/images/bg_2.jpg')] bg-cover bg-center">
      {/* <div className="lg:grid xl:hidden grid-cols-4 gap-6 px-10 mx-auto justify-center my-6">
        {items.map((item, i) => {
          const extraClass =
            i === 1 || i === 5 ? "mt-10" : i === 2 || i === 6 ? "-mt-10" : "";

          return (
            <a
              key={i}
            //   href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative w-40 h-40 border border-gray-300 rounded-xl rotate-45 flex items-center justify-center ${extraClass}`}
            >
              <div className="-rotate-45 flex flex-col items-center gap-3 text-center">
                <div className="w-16 h-16 bg-white rounded-full shadow flex items-center justify-center">
                  <img src={item.img} alt={item.title} className="w-10 h-10" />
                </div>
                <p className="text-gray-700 font-medium text-sm">
                  {item.title}
                </p>
              </div>
            </a>
          );
        })}
      </div> */}
      <div className="hidden lg:grid xl:hidden grid-cols-4 gap-6 px-10 mx-auto justify-center my-6">
        {items.map((item, i) => {
          // Apply special margin for items 5, 6, 7 (indices 4, 5, 6) on lg only
          const specialMargin =
            i === 4 || i === 5 || i === 6
              ? "lg:-mt-[40px] lg:ml-[120px] xl:mt-0 xl:ml-0"
              : "";

          return (
            <div
              key={i}
              className={`relative w-40 h-40 border border-gray-300 rounded-xl rotate-45 flex items-center justify-center ${specialMargin}`}
            >
              <div className="-rotate-45 flex flex-col items-center gap-3 text-center">
                <div className="w-16 h-16 bg-white rounded-full shadow flex items-center justify-center">
                  <img src={item.img} alt={item.title} className="w-10 h-10" />
                </div>
                <p className="text-gray-700 font-medium text-sm">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="hidden xl:grid grid-cols-4 xl:grid-cols-7  px-10 min-w-max mx-auto justify-center my-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative w-40 h-40 border border-gray-300 rounded-xl rotate-45 flex items-center justify-center"
          >
            <div className="-rotate-45 flex flex-col items-center gap-3 text-center">
              <div className="w-16 h-16 bg-white rounded-full shadow flex items-center justify-center">
                <img src={item.img} alt={item.title} className="w-10 h-10" />
              </div>
              <p className="text-gray-700 font-medium text-sm">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE: 2-COLUMN GRID */}
      <div className="lg:hidden grid grid-cols-2 gap-6 px-6 mt-6">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white rounded-full shadow flex items-center justify-center">
              <img src={item.img} alt={item.title} className="w-10 h-10" />
            </div>
            <p className="mt-3 text-gray-700 text-sm font-medium">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div
        className="lg:hidden grid gap-6 mt-10 px-6"
        style={{
          gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
        }}
      >
        {visibleItems.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white rounded-full shadow flex items-center justify-center">
              <img src={item.img} alt={item.title} className="w-10 h-10" />
            </div>
            <p className="mt-3 text-gray-700 text-sm font-medium">
              {item.title}
            </p>
          </div>
        ))}

        {/* Navigation buttons */}
        <div
          className={`col-span-${visibleCount} flex gap-4 justify-center mt-4`}
        >
          <button
            onClick={prev}
            className="bg-yellow-600 text-white px-3 py-2 rounded"
          >
            &lt;
          </button>
          <button
            onClick={next}
            className="bg-yellow-600 text-white px-3 py-2 rounded"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
