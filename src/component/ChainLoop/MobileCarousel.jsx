import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MobileCarousel({ items, visibleCount }) {
  const totalPages = Math.ceil(items.length / visibleCount);
  const [currentPage, setCurrentPage] = useState(0);

  const next = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleItems = Array.from({ length: visibleCount }).map(
    (_, i) => items[(currentPage + i) % items.length]
  );

  return (
    <div className="lg:hidden relative mt-10 px-6 overflow-hidden">
      <div
        className={`grid gap-6 transition-transform duration-500 ease-out`}
        style={{
          gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
        }}
      >
        {visibleItems.map((item, i) => (
          <div
            key={`${currentPage}-${i}`}
            className="flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105"
          >
            <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-500 hover:shadow-xl">
              <img src={item.img} alt={item.title} className="w-10 h-10" />
            </div>
            <p className="mt-3 text-gray-700 text-sm font-medium">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex gap-4 justify-center mt-8">
        <button
          onClick={prev}
          className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentPage
                  ? "w-8 h-2 bg-yellow-500"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
