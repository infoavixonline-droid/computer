import React from 'react';
import { ShoppingCart, Send, Info } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { formatLKR, getBuyNowLink } from '../lib/config';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    const link = getBuyNowLink(product, 1);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  // Extract key specs for a quick grid showcase
  const specKeys = Object.keys(product.specs).slice(0, 2);

  return (
    <div
      onClick={() => onViewDetails(product)}
      className="group relative flex flex-col overflow-hidden rounded-[6px] border border-[#222222] bg-[#111111] cursor-pointer transition-all duration-300 hover:border-[#FF5A00]/40 hover:shadow-[0_0_15px_rgba(255,90,0,0.1)]"
    >
      {/* Category Tag */}
      <div className="absolute top-3 left-3 z-10">
        <span className="bg-[#0A0A0A]/90 border border-[#222222] text-[#F5F5F5] font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-[4px]">
          {product.category}
        </span>
      </div>

      {/* Product Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#0A0A0A] flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback placeholder if image fails to load
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=600&auto=format&fit=crop';
          }}
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Name and Specs */}
        <div className="flex-1">
          <h3 className="font-semibold text-sm text-[#F5F5F5] tracking-tight line-clamp-1 group-hover:text-[#FF5A00] transition-colors duration-200">
            {product.name}
          </h3>
          
          <p className="mt-1 text-xs text-[#9A9A9A] line-clamp-2 min-h-[2rem]">
            {product.description}
          </p>

          {/* Spec Highlights */}
          <div className="mt-3 flex flex-wrap gap-1.5 min-h-[1.5rem]">
            {specKeys.map((key) => (
              <span
                key={key}
                className="bg-[#1A1A1A] text-[#9A9A9A] font-mono text-[9px] px-2 py-0.5 rounded border border-[#222222]"
              >
                {key}: {product.specs[key]}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing and CTAs */}
        <div className="mt-4 pt-3 border-t border-[#222222]">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-[#FF5A00] text-base tracking-tight">
              {formatLKR(product.price)}
            </span>
            {!product.inStock && (
              <span className="text-[10px] font-mono text-[#666666] tracking-widest uppercase">
                Out of Stock
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex items-center justify-center gap-1.5 border border-[#333333] hover:border-[#FF5A00] text-[#F5F5F5] hover:text-[#FF5A00] py-2 px-1 text-[11px] font-bold tracking-widest uppercase transition-colors duration-200 rounded-[4px] disabled:opacity-40 disabled:hover:border-[#333333] disabled:hover:text-[#F5F5F5]"
            >
              <ShoppingCart className="h-3.5 w-3.5" />
              <span>Add</span>
            </button>
            
            <button
              onClick={handleBuyNow}
              disabled={!product.inStock}
              className="flex items-center justify-center gap-1.5 bg-[#FF5A00] hover:bg-[#FF5A00]/80 text-[#0A0A0A] py-2 px-1 text-[11px] font-bold tracking-widest uppercase transition-all duration-200 rounded-[4px] disabled:opacity-40"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
