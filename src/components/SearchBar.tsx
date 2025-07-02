import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { categories, tags } from '../data/services';
import { FilterOptions } from '../types';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
  isFilterOpen: boolean;
  setIsFilterOpen: (open: boolean) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  filters,
  setFilters,
  isFilterOpen,
  setIsFilterOpen,
}) => {
  const activeFiltersCount = 
    (filters.category !== 'all' ? 1 : 0) +
    filters.tags.length +
    (filters.verified !== null ? 1 : 0);

  const clearFilters = () => {
    setFilters({
      category: 'all',
      tags: [],
      verified: null,
    });
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search services, APIs, tools..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full pl-10 pr-20 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        />
        <div className="absolute inset-y-0 right-0 flex items-center space-x-1 pr-3">
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              title="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex items-center space-x-1 ${
              activeFiltersCount > 0 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'
            } hover:text-blue-500 transition-colors`}
          >
            <Filter className="h-5 w-5" />
            {activeFiltersCount > 0 && (
              <span className="text-xs bg-blue-600 text-white rounded-full px-1.5 py-0.5">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {isFilterOpen && (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-4 shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Filters</h3>
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500 flex items-center space-x-1"
              >
                <X size={14} />
                <span>Clear all</span>
              </button>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Status
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="verified"
                  checked={filters.verified === null}
                  onChange={() => setFilters({ ...filters, verified: null })}
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">All Services</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="verified"
                  checked={filters.verified === true}
                  onChange={() => setFilters({ ...filters, verified: true })}
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">Verified Only</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tags
            </label>
            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    const newTags = filters.tags.includes(tag)
                      ? filters.tags.filter(t => t !== tag)
                      : [...filters.tags, tag];
                    setFilters({ ...filters, tags: newTags });
                  }}
                  className={`px-2 py-1 text-xs rounded-full border transition-colors ${
                    filters.tags.includes(tag)
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};