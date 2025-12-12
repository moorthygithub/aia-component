import React from "react";

export default function CustomerJourney() {
  const stages = [
    "Interest",
    "Engagement",
    "Consideration",
    "Purchase",
    "Support",
    "Retention",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="relative w-full max-w-2xl aspect-square">
        {/* Orbit Path Visualization - Behind everything */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <div className="w-[440px] h-[440px] rounded-full border-2 border-purple-500/30"></div>
        </div>

        {/* Center Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50 flex items-center justify-center animate-pulse">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg tracking-wider">
                CORE
              </span>
            </div>
          </div>
        </div>

        {/* Orbiting Cards - Above the line */}
        <div className="absolute inset-0 z-10">
          {stages.map((stage, index) => {
            const delay = index * 1.67;

            return (
              <div
                key={stage}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  animation: `orbit 10s linear infinite`,
                  animationDelay: `-${delay}s`,
                }}
              >
                <div
                  className="absolute"
                  style={{
                    transform: "translateX(220px) rotate(0deg)",
                  }}
                >
                  <div
                    className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-purple-500 rounded-lg px-6 py-3 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                    style={{
                      animation: `counterRotate 10s linear infinite`,
                      animationDelay: `-${delay}s`,
                    }}
                  >
                    <span className="text-purple-300 font-semibold text-sm tracking-wide whitespace-nowrap">
                      {stage}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <style jsx>{`
          @keyframes orbit {
            0% {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes counterRotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(-360deg);
            }
          }
        `}</style>
      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </div>
  );
}
