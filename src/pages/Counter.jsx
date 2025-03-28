import { useState } from "react";
import React from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-600 dark:bg-gray-500 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 text-center w-full max-w-sm">
        <p className="text-lg font-semibold text-gray-700">You have clicked <span className="text-blue-500">{count}</span> times</p>
        <div className="flex gap-4 mt-4 mx-18">
          <button 
            className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>
          <button 
            className="bg-red-500 text-white px-3 py2 rounded-lg hover:bg-red-700 transition duration-300"
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
