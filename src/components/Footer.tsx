import React from 'react';
import { Cpu, Instagram, Facebook, MessageSquare, Twitter } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../lib/config';

interface FooterProps {
  onNavigate: (view: string, category?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (view: string, category?: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    onNavigate(view, category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#111111] text-[#9A9A9A]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand block */}
          <div className="space-y-4">
            <a
              href="#/"
              onClick={(e) => handleNavClick('home', undefined, e)}
              className="flex items-center gap-2 font-bold text-xl tracking-tight text-[#F5F5F5] group"
            >
              <Cpu className="h-6 w-6 text-[#FF5A00]" />
              <span>
                APEX<span className="text-[#FF5A00]">_</span>TECH
              </span>
            </a>
            <p className="text-xs leading-relaxed max-w-xs">
              Engineered for extreme performance and uncompromised reliability. The absolute standard for computers and cutting-edge tech gear.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#222222] hover:border-[#FF5A00] hover:text-[#FF5A00] rounded-md transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#222222] hover:border-[#FF5A00] hover:text-[#FF5A00] rounded-md transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#222222] hover:border-[#FF5A00] hover:text-[#FF5A00] rounded-md transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#222222] hover:border-[#FF5A00] hover:text-[#FF5A00] rounded-md transition-colors duration-200"
                aria-label="Twitter/X"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-[#F5F5F5] uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="#/"
                  onClick={(e) => handleNavClick('home', undefined, e)}
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#/store"
                  onClick={(e) => handleNavClick('store', undefined, e)}
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  Store Catalog
                </a>
              </li>
              <li>
                <a
                  href="#/about"
                  onClick={(e) => handleNavClick('about', undefined, e)}
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#/contact"
                  onClick={(e) => handleNavClick('contact', undefined, e)}
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  Contact & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Categories Shortcut */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-[#F5F5F5] uppercase mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="#/store"
                  onClick={(e) => handleNavClick('store', 'Laptops', e)}
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  Laptops
                </a>
              </li>
              <li>
                <a
                  href="#/store"
                  onClick={(e) => handleNavClick('store', 'Desktops', e)}
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  Desktops
                </a>
              </li>
              <li>
                <a
                  href="#/store"
                  onClick={(e) => handleNavClick('store', 'Monitors', e)}
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  Monitors
                </a>
              </li>
              <li>
                <a
                  href="#/store"
                  onClick={(e) => handleNavClick('store', 'Keyboards & Mice', e)}
                  className="hover:text-[#FF5A00] transition-colors"
                >
                  Keyboards & Mice
                </a>
              </li>
            </ul>
          </div>

          {/* Support Info */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-[#F5F5F5] uppercase mb-4">
              Store Info
            </h3>
            <p className="text-xs mb-2 leading-relaxed">
              Colombo, Sri Lanka
            </p>
            <p className="text-xs mb-2 leading-relaxed">
              WhatsApp: +{WHATSAPP_NUMBER}
            </p>
            <p className="text-xs mb-4 leading-relaxed">
              Support Hours: 9:00 AM - 9:00 PM Daily
            </p>
            <span className="inline-block px-3 py-1 bg-[#111111] border border-[#222222] text-[#FF5A00] rounded-full text-[10px] font-bold tracking-wider">
              ● SUPPORT ONLINE
            </span>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-[#111111] text-center text-[11px] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {currentYear} APEX_TECH. All rights reserved.</p>
          <p className="text-[#666666]">
            Performance you can trust. Designed for creators & professionals.
          </p>
        </div>
      </div>
    </footer>
  );
};
