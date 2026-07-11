import React from 'react';
import { ArrowRight, Flame, Shield, Clock, Award } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import productsData from '../data/products.json';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onViewDetails: (product: Product) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onViewDetails }) => {
  // Parse products
  const products: Product[] = productsData as Product[];

  // Most Picked (flag: mostPicked)
  const mostPickedProducts = products.filter((p) => p.mostPicked).slice(0, 4);

  // Latest Products (sorted by dateAdded desc)
  const latestProducts = [...products]
    .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
    .slice(0, 4);

  // Best Sellers (flag: bestSelling)
  const bestSellingProducts = products.filter((p) => p.bestSelling).slice(0, 4);

  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#111111] to-[#0A0A0A] py-20 lg:py-28 border-b border-[#111111]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,90,0,0.05),transparent_50%)] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Col: Copy */}
            <div className="space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1A1A1A] border border-[#222222] text-[#FF5A00] font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
                <Flame className="h-3 w-3" /> NEX-GEN SPECIFICATIONS
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-none">
                UNCOMPROMISED <br />
                <span className="text-[#FF5A00]">PERFORMANCE</span>
              </h1>
              
              <p className="text-sm sm:text-base text-[#9A9A9A] max-w-lg mx-auto lg:mx-0 leading-relaxed">
                We design and supply elite components, workstations, and high-frequency peripherals for the world's most demanding digital professionals and competitive gamers.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => onNavigate('store')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FF5A00] hover:bg-[#FF5A00]/90 text-[#0A0A0A] px-8 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-200 rounded-[4px] font-sans"
                >
                  <span>Explore Catalog</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border border-[#222222] hover:border-[#FF5A00] text-[#F5F5F5] hover:text-[#FF5A00] px-8 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors duration-200 rounded-[4px]"
                >
                  Our Vision
                </button>
              </div>
            </div>

            {/* Right Col: Featured Banner Image */}
            <div className="flex items-center justify-center relative">
              <div className="absolute w-[80%] h-[80%] bg-[#FF5A00]/5 blur-3xl rounded-full" />
              <div className="relative border border-[#222222] bg-[#111111]/80 p-8 rounded-[8px] max-w-md w-full hover:border-[#FF5A00]/20 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=600&auto=format&fit=crop"
                  alt="Elite Station Case"
                  className="w-full h-auto max-h-[300px] object-contain mx-auto"
                />
                <div className="mt-6 flex justify-between items-center bg-[#0A0A0A] p-4 border border-[#222222] rounded-[4px]">
                  <div>
                    <p className="text-[10px] font-mono text-[#666666]">FEATURED WORKSTATION</p>
                    <p className="text-xs font-bold text-[#F5F5F5] mt-0.5">Obsidian Elite Desktop</p>
                  </div>
                  <button
                    onClick={() => {
                      const desktop = products.find((p) => p.id === 'prod-003');
                      if (desktop) onViewDetails(desktop);
                    }}
                    className="text-xs font-bold text-[#FF5A00] hover:underline uppercase tracking-wider"
                  >
                    View specs
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust badging section */}
      <section className="bg-[#111111] py-8 border-b border-[#222222] text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center justify-center gap-3">
              <Shield className="h-5 w-5 text-[#FF5A00]" />
              <div className="text-left">
                <p className="text-xs font-bold text-[#F5F5F5] tracking-wide">3-YEAR WARRANTY</p>
                <p className="text-[10px] text-[#666666]">Premium hardware backing</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Award className="h-5 w-5 text-[#FF5A00]" />
              <div className="text-left">
                <p className="text-xs font-bold text-[#F5F5F5] tracking-wide">100% GENUINE</p>
                <p className="text-[10px] text-[#666666]">Direct authorized partner</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-5 w-5 text-[#FF5A00]" />
              <div className="text-left">
                <p className="text-xs font-bold text-[#F5F5F5] tracking-wide">24/7 EXPERT CHAT</p>
                <p className="text-[10px] text-[#666666]">Engineers on-demand</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Flame className="h-5 w-5 text-[#FF5A00]" />
              <div className="text-left">
                <p className="text-xs font-bold text-[#F5F5F5] tracking-wide">ISLANDWIDE DELIVERY</p>
                <p className="text-[10px] text-[#666666]">Secure courier transit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Most Picked Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 pb-4 border-b border-[#111111]">
            <div>
              <p className="text-[10px] font-mono text-[#FF5A00] uppercase tracking-widest font-bold">Recommended Gear</p>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5] mt-1">MOST PICKED</h2>
            </div>
            <button
              onClick={() => onNavigate('store')}
              className="text-xs font-bold text-[#FF5A00] hover:underline flex items-center gap-1 uppercase tracking-widest"
            >
              <span>See All</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mostPickedProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} onViewDetails={onViewDetails} />
            ))}
          </div>
        </div>
      </section>

      {/* Spec Accent Callout - Brutalist Design Banner */}
      <section className="py-12 bg-gradient-to-r from-[#1A1A1A] to-[#111111] border-y border-[#222222] relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-[#FF5A00]/5 skew-x-12 blur-2xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base font-bold text-[#F5F5F5] tracking-tight">CRAFTING CUSTOM RIGS?</h3>
            <p className="text-xs text-[#9A9A9A] max-w-xl">
              Get direct assistance, components compatibility validation, and real-time support over WhatsApp from our system architecture engineers.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="w-full md:w-auto bg-[#FF5A00] hover:bg-[#FF5A00]/90 text-[#0A0A0A] font-bold text-xs uppercase tracking-widest px-8 py-3 rounded-[4px] transition-colors"
          >
            Contact Architect
          </button>
        </div>
      </section>

      {/* Latest Arrivals Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 pb-4 border-b border-[#111111]">
            <div>
              <p className="text-[10px] font-mono text-[#FF5A00] uppercase tracking-widest font-bold">Fresh Inventory</p>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5] mt-1">LATEST PRODUCTS</h2>
            </div>
            <button
              onClick={() => onNavigate('store')}
              className="text-xs font-bold text-[#FF5A00] hover:underline flex items-center gap-1 uppercase tracking-widest"
            >
              <span>See All</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} onViewDetails={onViewDetails} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 bg-[#111111]/40 border-t border-[#111111]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 pb-4 border-b border-[#222222]">
            <div>
              <p className="text-[10px] font-mono text-[#FF5A00] uppercase tracking-widest font-bold">Customer Favorites</p>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5] mt-1">BEST SELLERS</h2>
            </div>
            <button
              onClick={() => onNavigate('store')}
              className="text-xs font-bold text-[#FF5A00] hover:underline flex items-center gap-1 uppercase tracking-widest"
            >
              <span>See All</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellingProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} onViewDetails={onViewDetails} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
