import React, { useEffect, useState, forwardRef } from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'Express.js', category: 'Backend' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'C++', category: 'Language' },
  { name: 'Python', category: 'Language' },
];

interface TechStackProps {
  onClose: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

export const TechStack = forwardRef<HTMLDivElement, TechStackProps>(
  ({ onClose, buttonRef }, ref) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setPosition({
          top: rect.bottom + 8,
          left: rect.left,
        });
      }
    }, [buttonRef]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        style={{
          position: 'fixed',
          top: position.top,
          left: position.left,
        }}
        className="w-80 bg-navy-800/95 rounded-lg border border-electric-blue/20 shadow-xl backdrop-blur-md"
      >
        <div className="p-4 space-y-4">
          {Object.entries(
            technologies.reduce((acc, tech) => {
              acc[tech.category] = [...(acc[tech.category] || []), tech.name];
              return acc;
            }, {} as Record<string, string[]>)
          ).map(([category, techs]) => (
            <div key={category}>
              <h4 className="text-sm text-gray-400 mb-2">{category}</h4>
              <div className="grid grid-cols-2 gap-2">
                {techs.map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-1 bg-navy-700/50 rounded text-sm text-electric-blue border border-electric-blue/20"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }
);