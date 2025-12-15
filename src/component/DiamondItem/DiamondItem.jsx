// DiamondItem.jsx

export default function DiamondItem({ item, specialMargin = "" }) {
  return (
    <>
      <div
        className={`
        group relative w-40 h-40 rounded-xl rotate-45
        flex items-center justify-center
        border-2 border-gray-300
        bg-transparent
        cursor-pointer

        transition-all
        duration-500
        ease-out
        hover:-translate-y-3
        hover:border-yellow-500
        hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.55)_40%,rgba(255,255,255,0.18)_70%,rgba(255,255,255,0)_100%)]
     ${specialMargin}`}
      >
        <div className="-rotate-45 flex flex-col items-center gap-3 text-center transition-transform duration-500 ease-out">
          <div className="w-16 h-16 bg-white rounded-full shadow flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
            <img src={item.img} alt={item.title} className="w-10 h-10" />
          </div>
          <p className="text-gray-700 font-medium text-sm">{item.title}</p>
        </div>
      </div>
    </>
  );
}
