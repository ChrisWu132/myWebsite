import { Search } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

// Custom debounce function
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

const debouncedScroll = debounce((callback) => callback(), 100);

export function SearchBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      debouncedScroll(() => setIsScrolled(window.scrollY > 20));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <div className="relative">
        <textarea
          placeholder="I'm Chris Wu, a computer science student and aspiring entrepreneur passionate about innovation. I create impactful solutions through full-stack development, AI, and product management."
          className={`w-full px-4 py-4 h-32 resize-none border border-electric-blue/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300 ${
            isScrolled ? 'bg-navy-800' : 'bg-navy-800/50'
          }`}
          readOnly
        />
        <div className="absolute right-3 top-4">
          <Search className="h-5 w-5 text-gray-400 hover:text-electric-blue cursor-pointer transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
}