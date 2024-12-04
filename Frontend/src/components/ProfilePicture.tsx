import React from 'react';

export function ProfilePicture() {
  return (
    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-electric-blue/30 hover:border-electric-blue transition-colors duration-300">
      <img
        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=100&h=100"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  );
}