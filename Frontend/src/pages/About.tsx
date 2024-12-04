import React from 'react';
import { Book, Code, Trophy } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 font-inter">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=300&h=300"
            alt="Profile"
            className="w-[300px] h-[300px] object-cover rounded-xl mx-auto md:mx-0"
          />
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-100">Chris Wu</h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Computer Science student at USC with a passion for innovation and technology. 
              I specialize in full-stack development, AI/ML, and product management.
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          {[
            {
              icon: Book,
              title: "Education",
              content: "Currently pursuing Computer Science at USC, focusing on artificial intelligence and software engineering. Engaged in research projects and maintaining a strong academic record."
            },
            {
              icon: Code,
              title: "Technical Skills",
              content: "Proficient in full-stack development using React, Node.js, and Python. Experienced in AI/ML frameworks and cloud technologies. Strong foundation in algorithms and data structures."
            },
            {
              icon: Trophy,
              title: "Achievements",
              content: "Led multiple successful projects, contributed to open-source communities, and won hackathon competitions. Passionate about creating innovative solutions that make a difference."
            }
          ].map(({ icon: Icon, title, content }) => (
            <div key={title} className="bg-navy-800/50 rounded-xl p-6 border border-electric-blue/20">
              <div className="flex items-start gap-4">
                <Icon className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-100 mb-3">{title}</h2>
                  <p className="text-gray-300 leading-relaxed">{content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}