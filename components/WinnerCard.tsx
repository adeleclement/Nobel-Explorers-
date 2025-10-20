import React from 'react';
import { Prize, Laureate, Category } from '../types';

interface WinnerCardProps {
  prize: Prize;
  laureate: Laureate;
}

const categoryStyles: Record<Category, { bg: string; text: string; name: string }> = {
  physics: { bg: 'bg-category-physics', text: 'text-blue-900/80', name: 'text-blue-900' },
  chemistry: { bg: 'bg-category-chemistry', text: 'text-purple-900/80', name: 'text-purple-900' },
  medicine: { bg: 'bg-category-medicine', text: 'text-green-900/80', name: 'text-green-900' },
  literature: { bg: 'bg-category-literature', text: 'text-orange-900/80', name: 'text-orange-900' },
  peace: { bg: 'bg-category-peace', text: 'text-teal-900/80', name: 'text-teal-900' },
  economics: { bg: 'bg-category-economics', text: 'text-indigo-900/80', name: 'text-indigo-900' },
};

const WinnerCard: React.FC<WinnerCardProps> = ({ prize, laureate }) => {
  const name = `${laureate.firstname} ${laureate.surname || ''}`.trim();
  const styles = categoryStyles[prize.category as Category] || { bg: 'bg-gray-200', text: 'text-gray-800', name: 'text-black' };

  const motivationText = laureate?.motivation || prize.overallMotivation || '';

  return (
    <div className={`rounded-2xl p-6 border border-black/5 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${styles.bg}`}>
      
      <div className="flex-grow">
        <h3 className={`text-2xl font-bold font-sans leading-tight ${styles.name}`}>{name}</h3>
        <p className={`text-sm font-sans font-medium mt-1 ${styles.text}`}>
          {prize.category.charAt(0).toUpperCase() + prize.category.slice(1)}, {prize.year}
        </p>
      </div>

      <div className="flex-grow mt-4">
        <p className={`text-base italic font-serif leading-relaxed line-clamp-4 ${styles.text}`}>
          "{motivationText}"
        </p>
      </div>
      
      <div className="pt-4 mt-auto">
        <p className={`font-sans text-sm font-medium ${styles.name}`}>
          {parseInt(laureate.share) > 1 
            ? `Shared with ${parseInt(laureate.share) - 1} other(s)`
            : 'Sole Recipient'
          }
        </p>
      </div>
    </div>
  );
};

export default WinnerCard;