import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { SearchBar } from './components/SearchBar';
import { IconGrid } from './components/IconGrid';
import { StarBackground } from './components/StarBackground';
import { Footer } from './components/Footer';
import { MainTitle } from './components/MainTitle';
import { Blog } from './pages/Blog';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import '@fontsource/orbitron';
import '@fontsource/inter';
import '@fontsource/noto-sans-sc';

function Home() {
  return (
    <>
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-12">
          <MainTitle />
          <SearchBar />
        </div>
        <IconGrid />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
        <StarBackground />
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;