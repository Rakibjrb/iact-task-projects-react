import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [countBy, setCountBy] = useState(1);

  const handleDecrement = () => {
    setCount(count - countBy);
  };
  const handleIncrement = () => {
    setCount(count + countBy);
  };

  return (
    <main className="w-full min-h-screen bg-linear-to-br from-slate-50 via-gray-100 to-slate-200 flex justify-center items-center p-4">
      <div className="w-full max-w-sm bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col gap-6">
        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-slate-800">
            Counter App
          </h1>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Interactive Counter
          </p>
        </div>

        {/* Step / Count By Control */}
        <div className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
          <label
            htmlFor="countBy"
            className="text-xs font-semibold text-slate-600 uppercase tracking-wider pl-1"
          >
            Count By
          </label>
          <input
            value={countBy}
            onChange={(e) => setCountBy(Number(e.target.value))}
            id="countBy"
            name="countBy"
            type="number"
            min={1}
            max={10}
            placeholder="1"
            className="w-20 bg-white border border-slate-300 rounded-xl py-1.5 px-3 text-center text-sm font-semibold text-slate-800 shadow-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
          />
        </div>

        {/* Counter Display & Controls */}
        <div className="flex items-center justify-between gap-4 py-4 px-2">
          {/* Decrement Button */}
          <button
            type="button"
            onClick={handleDecrement}
            className="w-14 h-14 flex items-center justify-center rounded-2xl bg-rose-50 text-rose-600 border border-rose-100 text-2xl font-semibold shadow-xs hover:bg-rose-100 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            -
          </button>

          {/* Value Display */}
          <div className="flex-1 text-center">
            <span className="text-5xl font-black text-slate-800 tracking-tight tabular-nums select-none">
              {count}
            </span>
          </div>

          {/* Increment Button */}
          <button
            type="button"
            onClick={handleIncrement}
            className="w-14 h-14 flex items-center justify-center rounded-2xl bg-indigo-600 text-white text-2xl font-semibold shadow-md shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            +
          </button>
        </div>

        {/* Reset / Actions (UI only) */}
        <div className="flex gap-2 pt-1">
          <button
            onClick={() => setCount(0)}
            type="button"
            className="border border-slate-200 flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 active:scale-98 transition-all duration-200 cursor-pointer uppercase tracking-wider"
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
