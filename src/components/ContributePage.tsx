import React from 'react';
import { ArrowLeft, GitFork, FileText, Code, CheckCircle, AlertCircle, Github } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

interface ContributePageProps {
  onBack: () => void;
}

export const ContributePage: React.FC<ContributePageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} onNavigateToContribute={() => {}} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Directory</span>
          </button>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Contribute to OpenSource.Developer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Help us maintain the most comprehensive directory of free developer tools and services. 
              Your contributions make this resource valuable for the entire developer community.
            </p>
          </div>

          {/* Quick Start Guide */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <GitFork className="mr-3 text-blue-600" />
              Quick Start Guide
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Fork the Repository</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Create a fork of our GitHub repository to make your changes.
                  </p>
                  <a
                    href="https://github.com/ronakmunjapara/OpenSource.Developer/fork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    Fork Repository
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Add Your Service</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Add a new JSON object to the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">src/data/services.ts</code> file following our format.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Create Pull Request</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Submit a pull request with your changes. Our team will review and merge it if it meets our guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Format */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Code className="mr-3 text-green-600" />
              Service Format
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Add your service to the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">services</code> array in the following format:
            </p>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-800 dark:text-gray-200">
{`{
  id: 'unique-service-id',
  name: 'Service Name',
  description: 'Brief description of the service and its free tier.',
  url: 'https://service-website.com',
  category: 'appropriate-category',
  tags: ['tag1', 'tag2', 'tag3'],
  limitations: 'Description of free tier limitations',
  documentationUrl: 'https://docs.service.com',
  lastUpdated: '2024-02-01',
  verified: true
}`}
              </pre>
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FileText className="mr-3 text-purple-600" />
              Contribution Guidelines
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <CheckCircle className="mr-2 text-green-500" size={20} />
                  What to Include
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 ml-7">
                  <li>• Services with substantial free tiers (not just trials)</li>
                  <li>• Developer tools, APIs, hosting, databases, and related services</li>
                  <li>• Services that are actively maintained and reliable</li>
                  <li>• Clear documentation about free tier limitations</li>
                  <li>• Services that don't require credit card for free tier (preferred)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <AlertCircle className="mr-2 text-red-500" size={20} />
                  What NOT to Include
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 ml-7">
                  <li>• Services with only time-limited trials</li>
                  <li>• Services that require credit card for signup</li>
                  <li>• Discontinued or unreliable services</li>
                  <li>• Services with extremely limited free tiers</li>
                  <li>• Duplicate entries or very similar services</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Available Categories</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600 dark:text-gray-300 ml-4">
                  <div>• analytics</div>
                  <div>• apis</div>
                  <div>• authentication</div>
                  <div>• cdn</div>
                  <div>• database</div>
                  <div>• hosting</div>
                  <div>• monitoring</div>
                  <div>• email</div>
                  <div>• development-tools</div>
                  <div>• learning-resources</div>
                  <div>• design-tools</div>
                </div>
              </div>
            </div>
          </div>

          {/* Example */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Example Entry
            </h2>
            
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-800 dark:text-gray-200">
{`{
  id: 'netlify',
  name: 'Netlify',
  description: 'Modern web development platform with continuous deployment.',
  url: 'https://www.netlify.com',
  category: 'hosting',
  tags: ['jamstack', 'continuous deployment', 'forms', 'functions'],
  limitations: '100GB bandwidth, 300 build minutes per month',
  documentationUrl: 'https://docs.netlify.com',
  lastUpdated: '2024-01-19',
  verified: true
}`}
              </pre>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need Help?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              If you have questions about contributing or need help with the process, feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/ronakmunjapara/OpenSource.Developer/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Github size={20} className="mr-2" />
                Open an Issue
              </a>
              <a
                href="https://github.com/ronakmunjapara/OpenSource.Developer/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Join Discussion
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};