import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CategoryGrid } from './components/CategoryGrid';
import { ServiceCard } from './components/ServiceCard';
import { TableOfContents } from './components/TableOfContents';
import { ContributionSection } from './components/ContributionSection';
import { ContributePage } from './components/ContributePage';
import { Footer } from './components/Footer';
import { services, categories } from './data/services';
import { FilterOptions } from './types';
import { Analytics } from "@vercel/analytics/react";
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    tags: [],
    verified: null,
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'contribute'>('home');

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      // Search term filter
      const matchesSearch = !searchTerm || 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      // Category filter
      const matchesCategory = filters.category === 'all' || service.category === filters.category;
<Analytics/>
      // Tags filter
      const matchesTags = filters.tags.length === 0 || 
        filters.tags.some(tag => service.tags.includes(tag));

      // Verified filter
      const matchesVerified = filters.verified === null || service.verified === filters.verified;

      return matchesSearch && matchesCategory && matchesTags && matchesVerified;
    });
  }, [searchTerm, filters]);

  const servicesByCategory = useMemo(() => {
    const grouped: Record<string, typeof services> = {};
    categories.forEach(category => {
      grouped[category.id] = filteredServices.filter(service => service.category === category.id);
    });
    return grouped;
  }, [filteredServices]);

  const totalResults = filteredServices.length;

  const handleNavigateToContribute = () => {
    setCurrentPage('contribute');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'contribute') {
    return <ContributePage onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onNavigateToContribute={handleNavigateToContribute}
      />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Free Developer Tools & Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            A comprehensive directory of free tools, services, and resources for software developers. 
            Everything you need to build, deploy, and scale your projects without breaking the bank.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>{services.length} Services</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>{categories.length} Categories</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>Always Free</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filters={filters}
            setFilters={setFilters}
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
          />
        </div>

        {/* Category Grid (shown when no search/filters) */}
        {searchTerm === '' && filters.category === 'all' && filters.tags.length === 0 && filters.verified === null && (
          <CategoryGrid filters={filters} setFilters={setFilters} />
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Results Summary */}
            {(searchTerm || filters.category !== 'all' || filters.tags.length > 0 || filters.verified !== null) && (
              <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-blue-800 dark:text-blue-200">
                  Found <strong>{totalResults}</strong> service{totalResults !== 1 ? 's' : ''} 
                  {searchTerm && ` matching "${searchTerm}"`}
                  {filters.category !== 'all' && ` in ${categories.find(c => c.id === filters.category)?.name}`}
                </p>
              </div>
            )}

            {/* Table of Contents (Mobile) */}
            <div className="lg:hidden">
              <TableOfContents
                filteredServices={filteredServices}
                filters={filters}
                setFilters={setFilters}
                isMobile={true}
              />
            </div>

            {/* Services by Category */}
            {categories.map(category => {
              const categoryServices = servicesByCategory[category.id];
              if (categoryServices.length === 0) return null;

              return (
                <section key={category.id} id={`category-${category.id}`} className="mb-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.name}
                    </h2>
                    <span className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                      {categoryServices.length}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {category.description}
                  </p>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    {categoryServices.map(service => (
                      <ServiceCard key={service.id} service={service} />
                    ))}
                  </div>
                </section>
              );
            })}

            {totalResults === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No services found
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setFilters({ category: 'all', tags: [], verified: null });
                    setIsFilterOpen(false);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Contribution Section */}
            {totalResults > 0 && (
              <ContributionSection onNavigateToContribute={handleNavigateToContribute} />
            )}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block w-80">
            <TableOfContents
              filteredServices={filteredServices}
              filters={filters}
              setFilters={setFilters}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;