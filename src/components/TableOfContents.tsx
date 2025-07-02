import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown, List } from 'lucide-react';
import { categories } from '../data/services';
import { FilterOptions } from '../types';

interface TableOfContentsProps {
  filteredServices: any[];
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
  isMobile?: boolean;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  filteredServices,
  filters,
  setFilters,
  isMobile = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(!isMobile);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map(cat => cat.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(`category-${sections[i]}`);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (categoryId: string) => {
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getCategoryCount = (categoryId: string) => {
    return filteredServices.filter(service => service.category === categoryId).length;
  };

  if (isMobile) {
    return (
      <div className="mb-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-4 py-3 flex items-center justify-between text-left"
        >
          <div className="flex items-center space-x-2">
            <List size={20} className="text-gray-500" />
            <span className="font-medium text-gray-900 dark:text-white">Table of Contents</span>
          </div>
          {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </button>
        
        {isExpanded && (
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-1">
            {categories.map((category) => {
              const count = getCategoryCount(category.id);
              const isActive = activeSection === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    scrollToSection(category.id);
                    setIsExpanded(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{category.name}</span>
                    {count > 0 && (
                      <span className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                        {count}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="sticky top-24 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-fit">
      <div className="flex items-center space-x-2 mb-4">
        <List size={18} className="text-gray-500" />
        <h3 className="font-semibold text-gray-900 dark:text-white">Table of Contents</h3>
      </div>
      
      <nav className="space-y-1">
        {categories.map((category) => {
          const count = getCategoryCount(category.id);
          const isActive = activeSection === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => scrollToSection(category.id)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm">{category.name}</span>
                {count > 0 && (
                  <span className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                    {count}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
};