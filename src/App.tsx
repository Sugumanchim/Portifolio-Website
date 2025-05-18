import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { setupScrollAnimation } from './utils/animations';

function App() {
  // Setup smooth scrolling for anchor links
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const href = target.getAttribute('href');
        
        if (href) {
          e.preventDefault();
          const elementId = href.slice(1);
          const element = document.getElementById(elementId);
          
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
            
            // Update URL without reloading the page
            history.pushState(null, '', href);
          }
        }
      }
    };
    
    // Add event listener for link clicks
    document.addEventListener('click', handleLinkClick);
    
    // Setup animations
    setupScrollAnimation('.animate-on-scroll', 'fade-in-up');
    
    // Cleanup
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
  
  return (
    <div className="font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;