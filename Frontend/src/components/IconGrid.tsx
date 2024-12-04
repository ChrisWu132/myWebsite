import { BookText, Code, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { IconItem } from '../types';

const icons: IconItem[] = [
  { icon: Code, label: 'Projects', path: '/projects' },
  { icon: BookText, label: 'Blog', path: '/blog' },
  { icon: Trophy, label: 'About Me', path: '/about' },
];

export function IconGrid() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
      {icons.map(({ icon: Icon, label, path }: IconItem) => (
        <motion.div
          key={label}
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center space-y-4 cursor-pointer group"
          onClick={() => navigate(path)}
        >
          <div className="p-6 bg-navy-800/50 rounded-lg border border-electric-blue/20 group-hover:border-electric-blue/50 transition-all duration-300">
            <Icon className="h-10 w-10 text-electric-blue" />
          </div>
          <span className="text-center text-gray-300 group-hover:text-electric-blue transition-colors duration-300">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}