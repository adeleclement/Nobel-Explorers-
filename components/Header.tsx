import React, { useState } from 'react';
import ProductRequirementDoc from './ProductRequirementDoc';

const Header: React.FC = () => {
  const [isPrdOpen, setIsPrdOpen] = useState(false);

  return (
    <>
      <header className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg shadow-sm sticky top-0 z-40 border-b border-gray-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <svg className="w-10 h-10 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <h1 className="text-2xl md:text-3xl font-bold font-sans text-gray-900 dark:text-white">
              Noble Explorers
            </h1>
          </div>
          <button
            onClick={() => setIsPrdOpen(true)}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50 bg-slate-800 text-white shadow hover:bg-slate-800/90 h-9 px-4 py-2 font-sans dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-200/90"
          >
            View PRD
          </button>
        </div>
      </header>
      {isPrdOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsPrdOpen(false)}
        >
          <div 
            className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <ProductRequirementDoc onClose={() => setIsPrdOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;