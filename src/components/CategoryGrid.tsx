import React from 'react';
import * as Icons from 'lucide-react';
import { categories } from '../data/services';
import { FilterOptions } from '../types';

interface CategoryGridProps {
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ filters, setFilters }) => {
  const handleCategoryClick = (categoryId: string) => {
    setFilters({ ...filters, category: categoryId });
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Browse by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => {
          const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ size?: number }>;
          const isActive = filters.category === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`p-4 text-left border rounded-lg transition-all duration-200 hover:shadow-md ${
                isActive
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-md'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className={`p-2 rounded-md ${
                  isActive 
                    ? 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}>
                  <IconComponent size={20} />
                </div>
                <div>
                  <h3 className={`font-semibold ${
                    isActive 
                      ? 'text-blue-900 dark:text-blue-100' 
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {category.name}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {category.count} services
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-tight">
                {category.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};