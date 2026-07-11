import React, { useState } from 'react';
import { X, ShoppingCart, Send, Plus, Minus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { formatLKR, getBuyNowLink } from '../lib/config';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  const handleBuyNow = () => {
    const link = getBuyNowLink(product, quantity);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-3xl overflow-hidden rounded-[8px] border border-[#222222] bg-[#111111] text-[#F5F5F5] shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh] z-10 animate-scale-up">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#9A9A9A] hover:text-[#FF5A00] rounded-md transition-colors z-20"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left Side: Product Image Showcase */}
        <div className="md:w-1/2 bg-[#0A0A0A] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#222222] relative min-h-[250px] md:min-h-0">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[280px] w-full object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=600&auto=format&fit=crop';
            }}
          />
        </div>

        {/* Right Side: Product Specs & Actions */}
        <div className="md:w-1/2 p-6 overflow-y-auto flex flex-col justify-between">
          <div>
            <span className="inline-block bg-[#1A1A1A] border border-[#333333] text-[#FF5A00] font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-[4px] mb-3">
              {product.category}
            </span>
            <h2 className="text-xl font-bold tracking-tight text-[#F5F5F5] mb-2">
              {product.name}
            </h2>
            <div className="text-lg font-bold text-[#FF5A00] mb-4">
              {formatLKR(product.price)}
            </div>
            
            <p className="text-xs text-[#9A9A9A] leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Specifications Details */}
            <div className="mb-6">
              <h3 className="text-[10px] font-bold tracking-widest text-[#F5F5F5] uppercase mb-3 border-b border-[#222222] pb-1">
                Specifications
              </h3>
              <div className="space-y-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-xs py-0.5 font-mono">
                    <span className="text-[#666666]">{key}</span>
                    <span className="text-[#F5F5F5] text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#222222]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#9A9A9A]">Quantity</span>
              <div className="flex items-center border border-[#222222] bg-[#0A0A0A] rounded-[4px]">
                <button
                  onClick={handleDecrement}
                  disabled={!product.inStock}
                  className="p-1.5 text-[#9A9A9A] hover:text-[#FF5A00] transition-colors disabled:opacity-30"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="px-3 text-xs font-mono font-bold text-[#F5F5F5]">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  disabled={!product.inStock}
                  className="p-1.5 text-[#9A9A9A] hover:text-[#FF5A00] transition-colors disabled:opacity-30"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex items-center justify-center gap-2 border border-[#333333] hover:border-[#FF5A00] text-[#F5F5F5] hover:text-[#FF5A00] py-2.5 px-4 text-xs font-bold tracking-widest uppercase transition-colors duration-200 rounded-[4px] disabled:opacity-40"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="flex items-center justify-center gap-2 bg-[#FF5A00] hover:bg-[#FF5A00]/90 text-[#0A0A0A] py-2.5 px-4 text-xs font-bold tracking-widest uppercase transition-colors duration-200 rounded-[4px] disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
                <span>Buy Now</span>
              </button>
            </div>
            
            {!product.inStock && (
              <p className="text-center text-[10px] text-red-500 mt-2 font-mono uppercase tracking-wider">
                Currently Out of Stock
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
