import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { TechStack } from './TechStack';
import { useClickOutside } from '../hooks/useClickOutside';

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTechStack, setShowTechStack] = useState(false);
  const techStackButtonRef = useRef<HTMLButtonElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);

  useClickOutside([techStackButtonRef, techStackRef], () => {
    setShowTechStack(false);
  });

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-navy-900/95 backdrop-blur-md z-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-navy-800 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="hidden sm:flex items-center space-x-8">
              <NavLink 
                to="/"
                className={`text-lg font-medium ${
                  isActive('/') ? 'text-electric-blue' : 'text-gray-300 hover:text-electric-blue'
                } transition-colors duration-300`}
              >
                Home
              </NavLink>
              <NavLink 
                to="/projects"
                className={`text-lg font-medium ${
                  isActive('/projects') ? 'text-electric-blue' : 'text-gray-300 hover:text-electric-blue'
                } transition-colors duration-300`}
              >
                Projects
              </NavLink>
              <NavLink 
                to="/blog"
                className={`text-lg font-medium ${
                  isActive('/blog') ? 'text-electric-blue' : 'text-gray-300 hover:text-electric-blue'
                } transition-colors duration-300`}
              >
                Blog
              </NavLink>
            </div>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="relative">
              <button
                ref={techStackButtonRef}
                onClick={() => setShowTechStack(!showTechStack)}
                className={`text-lg font-medium ${
                  showTechStack ? 'text-electric-blue' : 'text-gray-300 hover:text-electric-blue'
                } transition-colors duration-300`}
              >
                Tech Stack
              </button>
              {showTechStack && (
                <TechStack
                  ref={techStackRef}
                  buttonRef={techStackButtonRef}
                  onClose={() => setShowTechStack(false)}
                />
              )}
            </div>
            <NavLink 
              to="/about"
              className={`text-lg font-medium ${
                isActive('/about') ? 'text-electric-blue' : 'text-gray-300 hover:text-electric-blue'
              } transition-colors duration-300`}
            >
              About Me
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {[
            { path: '/', label: 'Home' },
            { path: '/projects', label: 'Projects' },
            { path: '/blog', label: 'Blog' },
            { path: '/about', label: 'About Me' }
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(path) ? 'text-electric-blue bg-navy-800' : 'text-gray-300 hover:text-white hover:bg-navy-800'
              } transition-colors duration-300`}
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={() => setShowTechStack(!showTechStack)}
            className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-navy-800 transition-colors duration-300"
          >
            Tech Stack
          </button>
        </div>
      </div>
    </nav>
  );
}