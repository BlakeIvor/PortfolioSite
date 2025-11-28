'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="text-center mt-12">
      <button
        onClick={scrollToTop}
        className={`inline-flex items-center gap-2 border border-gray-700 rounded-2xl px-6 py-3 hover:border-gray-600 transition-all bg-gray-800 text-gray-300 hover:text-white group ${
          isVisible ? 'opacity-100' : 'opacity-50'
        }`}
        aria-label="Back to top"
      >
        <FaArrowUp className="text-sm group-hover:text-blue-400 transition-colors" />
        <span className="text-sm font-medium">Back to Top</span>
      </button>
    </div>
  );
}