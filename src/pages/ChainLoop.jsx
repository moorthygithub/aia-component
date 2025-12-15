// import React, { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import LGGrid from "../component/ChainLoop/LGGrid";
import MobileCarousel from "../component/ChainLoop/MobileCarousel";
import XLGrid from "../component/ChainLoop/XLGrid";

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

// export default function ChainLoop() {
//   const [index, setIndex] = useState(0);
//   const [visibleCount, setVisibleCount] = useState(2);

//   // Update visibleCount based on window width
//   useEffect(() => {
//     const updateVisibleCount = () => {
//       const width = window.innerWidth;
//       if (width < 640) setVisibleCount(2); // xs
//       else if (width < 1024) setVisibleCount(4); // sm/md
//       else setVisibleCount(3); // lg+
//     };

//     updateVisibleCount();
//     window.addEventListener("resize", updateVisibleCount);
//     return () => window.removeEventListener("resize", updateVisibleCount);
//   }, []);
//   const next = () => setIndex((prev) => (prev + visibleCount) % items.length);
//   const prev = () =>
//     setIndex((prev) => (prev - visibleCount + items.length) % items.length);

//   const visibleItems = Array.from({ length: visibleCount }).map(
//     (_, i) => items[(index + i) % items.length]
//   );
//   return (
//     <div className="w-full py-8 bg-[url('https://christuniversity.in/images/bg_2.jpg')] bg-cover bg-center">
//       <div className="hidden xl:grid grid-cols-7 px-10 min-w-max mx-auto justify-center my-6">
//         {items.map((item, i) => (
//           <div
//             key={i}
//             className="
//         group relative w-40 h-40 rounded-xl rotate-45
//         flex items-center justify-center
//         border-2 border-gray-300
//         bg-transparent
//         cursor-pointer

//         transition-all
//         duration-500
//         ease-out

//         hover:-translate-y-3
//         hover:border-yellow-500
//         hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.55)_40%,rgba(255,255,255,0.18)_70%,rgba(255,255,255,0)_100%)]
//       "
//           >
//             <div className="-rotate-45 flex flex-col items-center gap-3 text-center transition-transform duration-500 ease-out">
//               <div className="w-16 h-16 bg-white rounded-full shadow flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
//                 <img src={item.img} alt={item.title} className="w-10 h-10" />
//               </div>
//               <p className="text-gray-700 font-medium text-sm">{item.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* //Large screen */}
//       <div className="hidden lg:grid xl:hidden grid-cols-4 gap-6 px-10 mx-auto justify-center my-6">
//         {items.map((item, i) => {
//           const specialMargin =
//             i === 4 || i === 5 || i === 6
//               ? "lg:-mt-[40px] lg:ml-[120px] xl:mt-0 xl:ml-0"
//               : "";

//           return (
//             <div
//               key={i}
//               className={`
//     group relative w-40 h-40 rounded-xl rotate-45
//     flex items-center justify-center
//     border-2 border-gray-300
//     bg-transparent
//     cursor-pointer
//     hover:border-yellow-500
//     hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.6)_40%,rgba(255,255,255,0.15)_70%,rgba(255,255,255,0)_100%)]

//     ${specialMargin}
//   `}
//             >
//               <div className="-rotate-45 flex flex-col items-center gap-3 text-center">
//                 <div className="w-16 h-16 bg-white rounded-full shadow flex items-center justify-center">
//                   <img src={item.img} alt={item.title} className="w-10 h-10" />
//                 </div>
//                 <p className="text-gray-700 font-medium text-sm">
//                   {item.title}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       {/* //Middle Screen  and small screen*/}
//       <div className="lg:hidden grid grid-cols-2 gap-6 px-6 mt-6">
//         {items.map((item, i) => (
//           <div key={i} className="flex flex-col items-center text-center">
//             <div className="w-20 h-20 bg-white rounded-full shadow flex items-center justify-center">
//               <img src={item.img} alt={item.title} className="w-10 h-10" />
//             </div>
//             <p className="mt-3 text-gray-700 text-sm font-medium">
//               {item.title}
//             </p>
//           </div>
//         ))}
//       </div>

//       <div
//         className="lg:hidden grid gap-6 mt-10 px-6"
//         style={{
//           gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
//         }}
//       >
//         {visibleItems.map((item, i) => (
//           <div key={i} className="flex flex-col items-center text-center">
//             <div className="w-20 h-20 bg-white rounded-full shadow flex items-center justify-center">
//               <img src={item.img} alt={item.title} className="w-10 h-10" />
//             </div>
//             <p className="mt-3 text-gray-700 text-sm font-medium">
//               {item.title}
//             </p>
//           </div>
//         ))}

//         <div
//           className={`flex gap-4 justify-center mt-4 ${
//             visibleCount === 2 ? "col-span-2" : "col-span-4"
//           }`}
//         >
//           <button
//             onClick={prev}
//             className="bg-yellow-600 text-white px-3 py-2 rounded"
//           >
//             &lt;
//           </button>
//           <button
//             onClick={next}
//             className="bg-yellow-600 text-white px-3 py-2 rounded"
//           >
//             &gt;
//           </button>
//         </div>
//       </div>
//       <div className="lg:hidden relative mt-10 px-6 overflow-hidden">
//         {/* Carousel Container */}
//         <div className="relative">
//           <div
//             key={currentIndex}
//             className={`grid gap-6 transition-all duration-500 ease-out ${
//               direction === "left"
//                 ? "animate-slideInFromRight"
//                 : direction === "right"
//                 ? "animate-slideInFromLeft"
//                 : ""
//             }`}
//             style={{
//               gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
//             }}
//           >
//             {visibleItems.map((item, i) => (
//               <div
//                 key={`${currentIndex}-${i}`}
//                 className="flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105"
//               >
//                 <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl">
//                   <img src={item.img} alt={item.title} className="w-10 h-10" />
//                 </div>
//                 <p className="mt-3 text-gray-700 text-sm font-medium">
//                   {item.title}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex gap-4 justify-center mt-8">
//           <button
//             onClick={prev}
//             className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
//             aria-label="Previous"
//           >
//             <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
//           </button>

//           {/* Dot Indicators */}
//           <div className="flex items-center gap-2">
//             {items.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => {
//                   setDirection(idx > currentIndex ? "left" : "right");
//                   setCurrentIndex(idx);
//                 }}
//                 className={`transition-all duration-300 rounded-full ${
//                   idx === currentIndex
//                     ? "w-8 h-2 bg-yellow-500"
//                     : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
//                 }`}
//                 aria-label={`Go to slide ${idx + 1}`}
//               />
//             ))}
//           </div>

//           <button
//             onClick={next}
//             className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
//             aria-label="Next"
//           >
//             <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
//           </button>
//         </div>

//         <style jsx>{`
//           @keyframes slideInFromRight {
//             from {
//               opacity: 0;
//               transform: translateX(100%);
//             }
//             to {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }

//           @keyframes slideInFromLeft {
//             from {
//               opacity: 0;
//               transform: translateX(-100%);
//             }
//             to {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }

//           .animate-slideInFromRight {
//             animation: slideInFromRight 0.5s ease-out;
//           }

//           .animate-slideInFromLeft {
//             animation: slideInFromLeft 0.5s ease-out;
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }

export default function ChainLoop() {
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(2);
      else if (width < 1024) setVisibleCount(4);
      else setVisibleCount(3);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <div className="w-full py-8 bg-[url('https://christuniversity.in/images/bg_2.jpg')] bg-cover bg-center">
      <XLGrid items={items} />
      <LGGrid items={items} />
      <MobileCarousel items={items} visibleCount={visibleCount} />
    </div>
  );
}
