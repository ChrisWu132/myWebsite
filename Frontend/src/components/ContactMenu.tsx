import { Mail, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute right-0 mt-2 w-48 bg-navy-800 rounded-lg shadow-lg border border-electric-blue/20 overflow-hidden"
    >
      <a
        href="mailto:wuhaipen@usc.edu"
        className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:bg-navy-700 hover:text-electric-blue transition-colors duration-300"
      >
        <Mail className="h-4 w-4" />
        <span>Email</span>
      </a>
      <a
        href="https://www.linkedin.com/in/haipeng-wu"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:bg-navy-700 hover:text-electric-blue transition-colors duration-300"
      >
        <Linkedin className="h-4 w-4" />
        <span>LinkedIn</span>
      </a>
    </motion.div>
  );
}