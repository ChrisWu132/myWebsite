import React from 'react';

export function MainTitle() {
  return (
    <h1 className="flex items-baseline justify-center space-x-3 mb-8">
      <span className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-white">
        Hi,
      </span>
      <span className="text-2xl sm:text-3xl text-gray-400">I'm</span>
      <span className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-white animate-pulse">
        Chris Wu
      </span>
    </h1>
  );
}