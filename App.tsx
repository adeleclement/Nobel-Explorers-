import React, { useState, useMemo } from 'react';
import { nobelPrizes } from './data/nobelPrizes';
import { Prize, Laureate, Category } from './types';
import Header from './components/Header';
import Filters from './components/Filters';
import WinnerCard from './components/WinnerCard';
import DataVisualization from './components/DataVisualization';
import Timeline from './components/Timeline';

const App: React.FC = () => {
    // State for filters
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    
    // Calculate min/max years from data for filter initialization
    const years = useMemo(() => nobelPrizes.map(p => parseInt(p.year)), []);
    const minYear = useMemo(() => Math.min(...years), [years]);
    const maxYear = useMemo(() => Math.max(...years), [years]);
    const [yearRange, setYearRange] = useState<{ min: number; max: number }>({ min: minYear, max: maxYear });

    // Filtering logic
    const filteredPrizes = useMemo(() => {
        return nobelPrizes.filter(prize => {
            const prizeYear = parseInt(prize.year);
            const isInCategory = selectedCategories.length === 0 || selectedCategories.includes(prize.category as Category);
            const isInYearRange = prizeYear >= yearRange.min && prizeYear <= yearRange.max;
            return isInCategory && isInYearRange;
        });
    }, [selectedCategories, yearRange]);
    
    // Handler for filter changes from the Filters component
    const handleFilterChange = (newFilters: { categories?: Category[]; yearRange?: { min: number; max: number } }) => {
        if (newFilters.categories !== undefined) {
            setSelectedCategories(newFilters.categories);
        }
        if (newFilters.yearRange) {
            setYearRange(newFilters.yearRange);
        }
    };

    return (
        <div className="bg-slate-100 dark:bg-slate-900 min-h-screen font-serif text-gray-800 dark:text-gray-900 selection:bg-blue-500/20">
            <Header />
            <main className="container mx-auto p-4 md:p-8">
                
                <Filters 
                    onFilterChange={handleFilterChange}
                    selectedCategories={selectedCategories}
                    yearRange={yearRange}
                    minYear={minYear}
                    maxYear={maxYear}
                />

                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-center font-sans text-slate-800 dark:text-white">Laureates by Category</h2>
                    <DataVisualization prizes={filteredPrizes} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredPrizes.flatMap(prize => 
                        (prize.laureates || []).map(laureate => (
                            <WinnerCard 
                                key={laureate.id} 
                                prize={prize} 
                                laureate={laureate}
                            />
                        ))
                    )}
                </div>

                {filteredPrizes.length === 0 && (
                    <div className="text-center py-16">
                        <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-400 font-sans">No Nobel laureates found.</h2>
                        <p className="text-gray-500 dark:text-gray-500 mt-2">Try adjusting your filters.</p>
                    </div>
                )}
                
                <Timeline prizes={filteredPrizes} />

            </main>
        </div>
    );
};

export default App;