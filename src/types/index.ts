export interface Service {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  limitations?: string;
  documentationUrl?: string;
  lastUpdated: string;
  verified: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}

export type Theme = 'light' | 'dark';

export interface FilterOptions {
  category: string;
  tags: string[];
  verified: boolean | null;
}