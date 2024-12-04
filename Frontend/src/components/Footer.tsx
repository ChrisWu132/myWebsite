import React from 'react';

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-navy-900/80 backdrop-blur-md py-4">
      <div className="container mx-auto px-4 flex justify-end items-center text-sm text-gray-400">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-electric-blue transition-colors duration-300">Privacy</a>
          <a href="#" className="hover:text-electric-blue transition-colors duration-300">Terms</a>
          <a href="#" className="hover:text-electric-blue transition-colors duration-300">Settings</a>
        </div>
      </div>
    </footer>
  );
}