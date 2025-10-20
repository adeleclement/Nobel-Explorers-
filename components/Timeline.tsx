import React, { useMemo } from 'react';
import { Prize } from '../types';

interface TimelineProps {
  prizes: Prize[];
}

const Timeline: React.FC<TimelineProps> = ({ prizes }) => {
  const prizesByYear = useMemo(() => {
    const grouped: Record<string, Prize[]> = {};
    // Only group prizes that have laureates to display
    prizes.forEach(prize => {
      if (prize.laureates && prize.laureates.length > 0) {
          if (!grouped[prize.year]) {
            grouped[prize.year] = [];
          }
          grouped[prize.year].push(prize);
      }
    });
    // Sort years descending
    return Object.entries(grouped).sort(([yearA], [yearB]) => parseInt(yearB) - parseInt(yearA));
  }, [prizes]);

  if (prizesByYear.length === 0) {
    return null; // Don't render if no prizes match filters
  }

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-12 font-sans text-slate-800 dark:text-white">Timeline of Discoveries</h2>
      <div className="relative border-l-2 border-blue-500/30 ml-4 md:ml-0 md:pl-4">
        {prizesByYear.map(([year, yearPrizes]) => (
          <div key={year} className="mb-10 pl-10 relative last:mb-0">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-slate-900 ring-4 ring-blue-500/20"></div>
            <h3 className="text-2xl font-bold text-blue-500 dark:text-blue-400 font-sans">{year}</h3>
            <div className="mt-4 grid gap-4">
              {yearPrizes.map(prize => (
                <div key={`${prize.year}-${prize.category}`} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-black/5 dark:border-white/5">
                  <h4 className="font-bold text-lg capitalize text-gray-900 dark:text-white font-sans">{prize.category}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 italic mt-1 font-serif">
                    {prize.overallMotivation || prize.laureates?.[0]?.motivation}
                  </p>
                  <div className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-200 font-sans">
                    <span className="font-semibold">Laureates: </span>{prize.laureates?.map(l => `${l.firstname} ${l.surname || ''}`.trim()).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;