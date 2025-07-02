import React from 'react';
import { Github, Twitter, Heart, Rss } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OS</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">OpenSource.Developer</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Free developer tools & services
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              A comprehensive directory of free tools, services, and resources for software developers. 
              Curated by the community, for the community.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mb-2">
              <span>Made with</span>
              <Heart size={14} className="text-red-500 mx-1" />
              <span>by the developer community</span>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <span>Created by </span>
              <a 
                href="https://github.com/ronakmunjapara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                @ronakmunjapara
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#analytics" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#apis" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  APIs
                </a>
              </li>
              <li>
                <a href="#hosting" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Hosting
                </a>
              </li>
              <li>
                <a href="#database" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Databases
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/ronakmunjapara/OpenSource.Developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center space-x-1"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ronakmunjapara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center space-x-1"
                >
                  <Twitter size={14} />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="/rss.xml"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center space-x-1"
                >
                  <Rss size={14} />
                  <span>RSS Feed</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 OpenSource.Developer. Open source project maintained by the community.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/ronakmunjapara/OpenSource.Developer/blob/master/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              MIT License
            </a>
            <a
              href="https://github.com/ronakmunjapara/OpenSource.Developer/blob/master/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              Contributing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};