import React from 'react';
import { GitPullRequest, Heart, Star, Users, FileText, Code } from 'lucide-react';

interface ContributionSectionProps {
  onNavigateToContribute: () => void;
}

export const ContributionSection: React.FC<ContributionSectionProps> = ({ onNavigateToContribute }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 mb-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Help Us Grow This List
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Know a great free service that's missing? Contribute to make this resource even better!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-md">
              <GitPullRequest className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Submit a Service</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Found a free service that's not listed? Follow our contribution guide to add it to the directory.
          </p>
          <button
            onClick={onNavigateToContribute}
            className="inline-flex items-center text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
          >
            <FileText size={14} className="mr-1" />
            Contribution Guide →
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-md">
              <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Star on GitHub</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Show your support by starring our repository. It helps others discover this resource.
          </p>
          <a
            href="https://github.com/ronakmunjapara/OpenSource.Developer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors"
          >
            Star Repository →
          </a>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 text-2xl font-bold text-blue-600 dark:text-blue-400">
            <Users size={24} />
            <span>500+</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Contributors target</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 text-2xl font-bold text-green-600 dark:text-green-400">
            <Star size={24} />
            <span>65k+</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">GitHub Stars target</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 text-2xl font-bold text-purple-600 dark:text-purple-400">
            <Heart size={24} />
            <span>1M+</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Monthly Users target</p>
        </div>
      </div>
    </div>
  );
};