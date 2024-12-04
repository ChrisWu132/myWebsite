import { RefObject } from 'react';
import { IconProps } from 'lucide-react';

// Blog types
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

// Project types
export interface Project {
  title: string;
  description: string;
  github: string;
  demo: string;
  tags: string[];
}

// Navigation types
export interface NavItem {
  path: string;
  label: string;
}

// TechStack types
export interface TechStackProps {
  ref: RefObject<HTMLDivElement>;
  buttonRef: RefObject<HTMLButtonElement>;
  onClose: () => void;
}

// IconGrid types
export interface IconItem {
  icon: React.FC<IconProps>;
  label: string;
  path: string;
}

// SearchBar types
export interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

// ContactMenu types
export interface ContactLink {
  href: string;
  icon: React.FC<IconProps>;
  label: string;
  external?: boolean;
} 