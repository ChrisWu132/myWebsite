import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Code Assistant",
    description: "A VS Code extension that uses machine learning to provide intelligent code suggestions and documentation. Built with TypeScript and Python.",
    github: "#",
    demo: "#",
    tags: ["TypeScript", "Python", "Machine Learning"]
  },
  {
    title: "Real-time Collaboration Platform",
    description: "A web application enabling real-time document editing and team collaboration using WebSocket technology. Built with React and Node.js.",
    github: "#",
    demo: "#",
    tags: ["React", "Node.js", "WebSocket"]
  }
];

export function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16 font-inter">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-100 mb-8">Projects</h1>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-navy-800/50 rounded-xl p-6 border border-electric-blue/20 hover:border-electric-blue/40 transition-colors duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-100 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-navy-700/50 text-electric-blue border border-electric-blue/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a 
                  href={project.github}
                  className="flex items-center space-x-2 text-electric-blue hover:text-white transition-colors duration-300"
                >
                  <Github className="h-5 w-5" />
                  <span>Source Code</span>
                </a>
                <a 
                  href={project.demo}
                  className="flex items-center space-x-2 text-electric-blue hover:text-white transition-colors duration-300"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}