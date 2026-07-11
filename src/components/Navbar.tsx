import React, { useState, useEffect } from 'react';
import { ShoppingCart, Cpu, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', value: 'home', href: '#/' },
    { label: 'STORE', value: 'store', href: '#/store' },
    { label: 'ABOUT', value: 'about', href: '#/about' },
    { label: 'CONTACT', value: 'contact', href: '#/contact' },
  ];

  const handleLinkClick = (value: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(value);
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#222222]'
          : 'bg-[#0A0A0A] border-b border-[#111111]'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#/"
            onClick={(e) => handleLinkClick('home', e)}
            className="flex items-center gap-2 font-bold text-xl tracking-tight text-[#F5F5F5] group"
          >
            <Cpu className="h-6 w-6 text-[#FF5A00] transition-transform duration-300 group-hover:scale-110" />
            <span>
              APEX<span className="text-[#FF5A00]">_</span>TECH
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentView === item.value;
              return (
                <a
                  key={item.value}
                  href={item.href}
                  onClick={(e) => handleLinkClick(item.value, e)}
                  className={`text-xs font-semibold tracking-widest relative py-1 transition-colors duration-200 ${
                    isActive ? 'text-[#FF5A00]' : 'text-[#9A9A9A] hover:text-[#F5F5F5]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#FF5A00]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a
              href="#/cart"
              onClick={(e) => handleLinkClick('cart', e)}
              className="relative p-2 text-[#9A9A9A] hover:text-[#F5F5F5] transition-colors duration-200"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5.5 w-5.5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF5A00] text-[10px] font-bold text-white ring-2 ring-[#0A0A0A]">
                  {cartCount}
                </span>
              )}
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#9A9A9A] hover:text-[#F5F5F5] md:hidden transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-[#222222] bg-[#0A0A0A] px-4 py-4 space-y-3">
          {navItems.map((item) => {
            const isActive = currentView === item.value;
            return (
              <a
                key={item.value}
                href={item.href}
                onClick={(e) => handleLinkClick(item.value, e)}
                className={`block px-3 py-2 rounded-md text-sm font-semibold tracking-widest transition-colors ${
                  isActive
                    ? 'bg-[#1A1A1A] text-[#FF5A00] border-l-2 border-[#FF5A00]'
                    : 'text-[#9A9A9A] hover:bg-[#111111] hover:text-[#F5F5F5]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
