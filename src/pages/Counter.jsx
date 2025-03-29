import { useState } from "react";
import React from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-600 dark:bg-gray-500 p-4">
      <div className="bg-amber-100 shadow-lg rounded-2xl p-6 text-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <p className="text-lg font-semibold text-gray-700">
          You have clicked <span className="text-blue-500">{count}</span> times
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <button 
            className="group px-4 py-2 rounded-lg bg-gradient-to-b from-white to-stone-200/40 shadow-md active:shadow-sm active:scale-95 transition-all duration-200 text-gray-700 font-medium"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>
          <button 
            className="group px-4 py-2 rounded-lg bg-gradient-to-b from-white to-stone-200/40 shadow-md active:shadow-sm active:scale-95 transition-all duration-200 text-gray-700 font-medium"
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
