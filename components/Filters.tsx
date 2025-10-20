import React from 'react';
import { Category } from '../types';
import YearRangeSlider from './YearRangeSlider';

interface FiltersProps {
  onFilterChange: (newFilters: { categories?: Category[]; yearRange?: { min: number; max: number } }) => void;
  selectedCategories: Category[];
  yearRange: { min: number; max: number };
  minYear: number;
  maxYear: number;
}

const CATEGORIES: { id: Category; name: string }[] = [
  { id: 'physics', name: 'Physics' },
  { id: 'chemistry', name: 'Chemistry' },
  { id: 'medicine', name: 'Medicine' },
  { id: 'literature', name: 'Literature' },
  { id: 'peace', name: 'Peace' },
  { id: 'economics', name: 'Economics' },
];

const categoryButtonColors: Record<Category, { base: string; selected: string; text: string }> = {
  physics: { base: 'bg-category-physics/40 hover:bg-category-physics/80', selected: 'bg-category-physics ring-2 ring-blue-500/50', text: 'text-blue-900' },
  chemistry: { base: 'bg-category-chemistry/40 hover:bg-category-chemistry/80', selected: 'bg-category-chemistry ring-2 ring-purple-500/50', text: 'text-purple-900' },
  medicine: { base: 'bg-category-medicine/40 hover:bg-category-medicine/80', selected: 'bg-category-medicine ring-2 ring-green-500/50', text: 'text-green-900' },
  literature: { base: 'bg-category-literature/40 hover:bg-category-literature/80', selected: 'bg-category-literature ring-2 ring-orange-500/50', text: 'text-orange-900' },
  peace: { base: 'bg-category-peace/40 hover:bg-category-peace/80', selected: 'bg-category-peace ring-2 ring-teal-500/50', text: 'text-teal-900' },
  economics: { base: 'bg-category-economics/40 hover:bg-category-economics/80', selected: 'bg-category-economics ring-2 ring-indigo-500/50', text: 'text-indigo-900' },
};

const Filters: React.FC<FiltersProps> = ({ onFilterChange, selectedCategories, yearRange, minYear, maxYear }) => {
  const handleCategoryToggle = (category: Category) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    onFilterChange({ categories: newCategories });
  };
  
  const selectAll = () => onFilterChange({ categories: CATEGORIES.map(c => c.id) });
  const deselectAll = () => onFilterChange({ categories: [] });

  const handleYearChange = (newRange: { min: number; max: number }) => {
    onFilterChange({ yearRange: newRange });
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6 mb-8 font-sans">
      <h2 className="text-xl font-bold mb-4 text-center text-slate-800 dark:text-white">Filter Nobel Laureates</h2>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-slate-700 dark:text-slate-300">By Category</h3>
            <div className="flex space-x-2">
                 <button onClick={selectAll} className="text-xs font-medium text-blue-600 hover:underline dark:text-blue-400">Select All</button>
                 <button onClick={deselectAll} className="text-xs font-medium text-blue-600 hover:underline dark:text-blue-400">Deselect All</button>
            </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map(({ id, name }) => (
            <button
              key={id}
              onClick={() => handleCategoryToggle(id)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                categoryButtonColors[id].text
              } ${
                selectedCategories.includes(id) ? categoryButtonColors[id].selected : categoryButtonColors[id].base
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2 text-slate-700 dark:text-slate-300">By Year</h3>
        <YearRangeSlider min={minYear} max={maxYear} value={yearRange} onChange={handleYearChange} />
      </div>
    </div>
  );
};

export default Filters;