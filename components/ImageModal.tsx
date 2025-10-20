import React from 'react';
import { Laureate } from '../types';

interface ImageModalProps {
  laureate: Laureate | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ laureate, onClose }) => {
  if (!laureate || !laureate.image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-2xl w-full relative p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors z-10 p-1 bg-white/50 dark:bg-black/50 rounded-full"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <img
          src={laureate.image}
          alt={`${laureate.firstname} ${laureate.surname || ''}`}
          className="w-full h-auto max-h-[80vh] object-contain rounded-md"
        />
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold font-sans text-gray-900 dark:text-white">
            {laureate.firstname} {laureate.surname || ''}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;