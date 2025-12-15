// import React, { useEffect, useState } from "react";

// export default function CustomerJourney() {
//   const labels = [
//     "Purchase",
//     "Support",
//     "Retention",
//     "Interest",
//     "Engagement",
//     "Consideration",
//   ];

//   const radius = 180;
//   const centerX = 300;
//   const centerY = 300;

//   const [angleOffset, setAngleOffset] = useState(0);

//   // Animate the orbit
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAngleOffset((prev) => prev + 0.5); // speed
//     }, 20);
//     return () => clearInterval(interval);
//   }, []);

//   const getPosition = (angle) => {
//     const rad = (angle * Math.PI) / 180;
//     return {
//       x: centerX + radius * Math.cos(rad),
//       y: centerY + radius * Math.sin(rad),
//     };
//   };

//   return (
//     <div className="flex flex-col items-center justify-center  bg-white">
//       <div className="relative w-full max-w-2xl aspect-square">
//         <svg viewBox="0 0 600 600" className="w-full h-full">
//           <defs>
//             <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
//               <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
//             </linearGradient>
//           </defs>

//           <defs>
//             <linearGradient
//               id="orbitGradient"
//               x1="0%"
//               y1="0%"
//               x2="100%"
//               y2="100%"
//             >
//               <stop offset="0%" stopColor="rgb(89, 86, 214)" />
//               <stop offset="100%" stopColor="rgb(140, 127, 255)" />
//             </linearGradient>

//             <filter id="glow">
//               <feGaussianBlur stdDeviation="3" result="coloredBlur" />
//               <feMerge>
//                 <feMergeNode in="coloredBlur" />
//                 <feMergeNode in="SourceGraphic" />
//               </feMerge>
//             </filter>
//           </defs>

//           <circle
//             cx={centerX}
//             cy={centerY}
//             r={radius}
//             fill="none"
//             stroke="url(#orbitGradient)"
//             strokeWidth={8}
//             filter="url(#glow)"
//           />

//           {/* Lines */}

//           {/* Center circle */}
//           <circle
//             cx={centerX}
//             cy={centerY}
//             r={50}
//             fill="#6366f1"
//             opacity={0.1}
//           />
//           <circle
//             cx={centerX}
//             cy={centerY}
//             r={40}
//             fill="white"
//             stroke="#6366f1"
//             strokeWidth={2.5}
//           />

//           {/* Center icon */}
//           <foreignObject
//             x={centerX - 20}
//             y={centerY - 20}
//             width={40}
//             height={40}
//           >
//             <div className="w-full h-full flex items-center justify-center">
//               <svg
//                 className="w-6 h-6 text-indigo-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
//                 />
//               </svg>
//             </div>
//           </foreignObject>

//           {/* MOVING LABELS - ALWAYS HORIZONTAL */}
//           {labels.map((label, i) => {
//             const angle = i * (360 / labels.length) + angleOffset;
//             const pos = getPosition(angle);

//             return (
//               <foreignObject
//                 key={i}
//                 x={pos.x - 60}
//                 y={pos.y - 24}
//                 width={120}
//                 height={48}
//                 style={{
//                   overflow: "visible",
//                 }}
//               >
//                 <div
//                   style={{
//                     width: "120px",
//                     height: "48px",
//                     borderRadius: "24px",
//                     background: "white",
//                     border: "2px solid #e0e7ff",
//                     boxShadow: "0 4px 12px rgba(99, 102, 241, 0.08)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontSize: "14px",
//                     fontWeight: 600,
//                     color: "#4f46e5",
//                     transition: "all 0.3s ease",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = "scale(1.05)";
//                     e.currentTarget.style.boxShadow =
//                       "0 8px 20px rgba(99, 102, 241, 0.15)";
//                     e.currentTarget.style.borderColor = "#6366f1";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = "scale(1)";
//                     e.currentTarget.style.boxShadow =
//                       "0 4px 12px rgba(99, 102, 241, 0.08)";
//                     e.currentTarget.style.borderColor = "#e0e7ff";
//                   }}
//                 >
//                   {label}
//                 </div>
//               </foreignObject>
//             );
//           })}
//         </svg>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState, useRef } from "react";

export default function CustomerJourney() {
  const labels = [
    "Purchase",
    "Support",
    "Retention",
    "Interest",
    "Engagement",
    "Consideration",
  ];

  const radius = 180;
  const centerX = 300;
  const centerY = 300;

  const [angleOffset, setAngleOffset] = useState(0);
  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(Date.now());

  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      const delta = now - lastTimeRef.current;
      lastTimeRef.current = now;

      setAngleOffset((prev) => (prev + delta * 0.02) % 360);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const getPosition = (angle) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(rad),
      y: centerY + radius * Math.sin(rad),
    };
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="relative w-full max-w-2xl aspect-square">
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full"
          style={{ willChange: "transform" }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
            </linearGradient>

            <linearGradient
              id="orbitGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgb(89, 86, 214)" />
              <stop offset="100%" stopColor="rgb(140, 127, 255)" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="url(#orbitGradient)"
            strokeWidth={8}
            filter="url(#glow)"
          />

          {/* Center circle */}
          <circle
            cx={centerX}
            cy={centerY}
            r={50}
            fill="#6366f1"
            opacity={0.1}
          />
          <circle
            cx={centerX}
            cy={centerY}
            r={40}
            fill="white"
            stroke="#6366f1"
            strokeWidth={2.5}
          />

          {/* Center icon */}
          <foreignObject
            x={centerX - 20}
            y={centerY - 20}
            width={40}
            height={40}
          >
            <div className="w-full h-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </foreignObject>

          {/* MOVING LABELS - ALWAYS HORIZONTAL */}
          {labels.map((label, i) => {
            const angle = i * (360 / labels.length) + angleOffset;
            const pos = getPosition(angle);

            return (
              <foreignObject
                key={i}
                x={pos.x - 60}
                y={pos.y - 24}
                width={120}
                height={48}
                style={{
                  overflow: "visible",
                  willChange: "transform",
                }}
              >
                <div
                  className="w-[120px] h-12 rounded-full bg-white border-2 border-indigo-100 
                             shadow-[0_4px_12px_rgba(99,102,241,0.08)]
                             flex items-center justify-center
                             text-sm font-semibold text-indigo-600
                             transition-all duration-200 ease-out
                             cursor-pointer
                             hover:scale-105 hover:shadow-[0_8px_20px_rgba(99,102,241,0.15)] 
                             hover:border-indigo-500
                             transform-gpu backface-hidden"
                  style={{
                    transform: "translateZ(0)",
                  }}
                >
                  {label}
                </div>
              </foreignObject>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
