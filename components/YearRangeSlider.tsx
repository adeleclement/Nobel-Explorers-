import React, { useState, useEffect } from 'react';

interface YearRangeSliderProps {
  min: number;
  max: number;
  value: { min: number; max: number };
  onChange: (value: { min: number; max: number }) => void;
}

const YearRangeSlider: React.FC<YearRangeSliderProps> = ({ min, max, value, onChange }) => {
  const [minValue, setMinValue] = useState(value.min);
  const [maxValue, setMaxValue] = useState(value.max);

  // Sync with parent component's state
  useEffect(() => {
    setMinValue(value.min);
    setMaxValue(value.max);
  }, [value]);

  // Debounce the onChange callback
  useEffect(() => {
    const handler = setTimeout(() => {
      // Only call onChange if the value has actually changed
      if (value.min !== minValue || value.max !== maxValue) {
        onChange({ min: minValue, max: maxValue });
      }
    }, 200); // 200ms debounce delay

    return () => clearTimeout(handler);
  }, [minValue, maxValue, onChange, value]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(newMin);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(newMax);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 items-center font-sans">
      <div className="space-y-2">
        <label htmlFor="min-year" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          From: <span className="font-bold text-gray-900 dark:text-white">{minValue}</span>
        </label>
        <input
          id="min-year"
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={handleMinChange}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
          aria-label="Minimum Year"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="max-year" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          To: <span className="font-bold text-gray-900 dark:text-white">{maxValue}</span>
        </label>
        <input
          id="max-year"
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxChange}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
          aria-label="Maximum Year"
        />
      </div>
    </div>
  );
};

export default YearRangeSlider;