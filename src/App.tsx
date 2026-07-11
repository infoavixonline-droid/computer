import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { HomeView } from './components/HomeView';
import { StoreView } from './components/StoreView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { CartView } from './components/CartView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Product } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Sync hash routing on window navigation or browser back/forward action
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash || '#/';
      
      if (hash.startsWith('#/store')) {
        setCurrentView('store');
      } else if (hash === '#/about') {
        setCurrentView('about');
      } else if (hash === '#/contact') {
        setCurrentView('contact');
      } else if (hash === '#/cart') {
        setCurrentView('cart');
      } else {
        setCurrentView('home');
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => {
      window.removeEventListener('hashchange', parseHash);
    };
  }, []);

  // Set hash manually and navigate smoothly
  const handleNavigate = (view: string, category?: string) => {
    if (category) {
      setSelectedCategory(category);
    }
    
    // Set the location hash trigger which will hit our listener
    if (view === 'home') {
      window.location.hash = '#/';
    } else {
      window.location.hash = `#/${view}`;
    }
    
    // Smooth scroll top on view change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDetails = (product: Product) => {
    setActiveProduct(product);
  };

  const handleCloseDetails = () => {
    setActiveProduct(null);
  };

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans selection:bg-[#FF5A00] selection:text-black">
        {/* Navigation Head */}
        <Navbar currentView={currentView} onNavigate={handleNavigate} />

        {/* Primary View Switcher */}
        <main className="flex-grow">
          {currentView === 'home' && (
            <HomeView onNavigate={handleNavigate} onViewDetails={handleViewDetails} />
          )}
          {currentView === 'store' && (
            <StoreView
              onViewDetails={handleViewDetails}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          )}
          {currentView === 'about' && <AboutView />}
          {currentView === 'contact' && <ContactView />}
          {currentView === 'cart' && <CartView onNavigate={handleNavigate} />}
        </main>

        {/* Global Modal Specifications Overlay */}
        <ProductDetailModal product={activeProduct} onClose={handleCloseDetails} />

        {/* Universal Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </CartProvider>
  );
}
