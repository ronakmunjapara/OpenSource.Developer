import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Shield, Calendar, Book } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}#${service.id}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div
      id={service.id}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600 group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {service.name}
          </h3>
          {service.verified && (
            <Shield className="w-4 h-4 text-green-500 flex-shrink-0" title="Verified service" />
          )}
        </div>
        <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={copyLink}
            className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Copy link"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {service.description}
      </p>

      {service.limitations && (
        <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-md">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Limitations:</strong> {service.limitations}
          </p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full border border-blue-200 dark:border-blue-800"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Calendar size={14} className="mr-1" />
          <span>Updated {formatDate(service.lastUpdated)}</span>
        </div>

        <div className="flex items-center space-x-2">
          {service.documentationUrl && (
            <a
              href={service.documentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Book size={14} className="mr-1" />
              Docs
            </a>
          )}
          <a
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Visit
            <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};