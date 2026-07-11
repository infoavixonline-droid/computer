import React from 'react';
import { ShoppingBag, Trash2, Plus, Minus, Send, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatLKR, getBuyAllLink } from '../lib/config';

interface CartViewProps {
  onNavigate: (view: string) => void;
}

export const CartView: React.FC<CartViewProps> = ({ onNavigate }) => {
  const { cart, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  const total = getCartTotal();

  const handleBuyAll = () => {
    const link = getBuyAllLink(cart);
    if (!link) return;
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  if (cart.length === 0) {
    return (
      <div className="bg-[#0A0A0A] text-[#F5F5F5] min-h-[70vh] flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-sm">
          <div className="h-16 w-16 bg-[#111111] border border-[#222222] rounded-full flex items-center justify-center text-[#9A9A9A] mx-auto">
            <ShoppingBag className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#F5F5F5] tracking-tight">YOUR CART IS EMPTY</h2>
            <p className="text-xs text-[#9A9A9A] mt-2 leading-relaxed">
              Your high-performance cart is currently unconfigured. Let's fix that with some next-gen hardware.
            </p>
          </div>
          <button
            onClick={() => onNavigate('store')}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#FF5A00] hover:bg-[#FF5A00]/90 text-[#0A0A0A] font-bold text-xs uppercase tracking-widest py-3.5 rounded-[4px] transition-colors"
          >
            <span>Browse store</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="border-b border-[#111111] pb-6 mb-12 flex justify-between items-end">
          <div>
            <p className="text-[10px] font-mono text-[#FF5A00] uppercase tracking-widest font-bold">
              Secure Checkout
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F5] mt-1">
              SYSTEM CONFIGURATOR CART
            </h1>
          </div>
          <button
            onClick={clearCart}
            className="text-xs font-mono text-[#666666] hover:text-red-500 hover:underline uppercase tracking-wider"
          >
            Clear Configuration
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: Items List (Col span 8) */}
          <div className="lg:col-span-8 space-y-4">
            {cart.map((item) => {
              const itemTotal = item.price * item.quantity;
              return (
                <div
                  key={item.id}
                  className="bg-[#111111] border border-[#222222] p-4 rounded-[6px] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  {/* Thumbnail & Description */}
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 bg-[#0A0A0A] border border-[#222222] rounded-[4px] p-2 flex items-center justify-center shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=600&auto=format&fit=crop';
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#F5F5F5] tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-[#FF5A00] mt-1 font-mono">
                        {formatLKR(item.price)} each
                      </p>
                    </div>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 border-t border-[#222222] sm:border-t-0 pt-3 sm:pt-0">
                    
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-[#222222] bg-[#0A0A0A] rounded-[4px]">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 text-[#9A9A9A] hover:text-[#FF5A00] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="px-3 text-xs font-mono font-bold text-[#F5F5F5]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 text-[#9A9A9A] hover:text-[#FF5A00] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    {/* Total Item Price */}
                    <div className="text-right min-w-[100px]">
                      <span className="text-xs font-mono font-bold text-[#F5F5F5]">
                        {formatLKR(itemTotal)}
                      </span>
                    </div>

                    {/* Delete Icon */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1.5 text-[#666666] hover:text-red-500 rounded transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>

                  </div>
                </div>
              );
            })}

            {/* Back to Store link */}
            <button
              onClick={() => onNavigate('store')}
              className="text-xs font-bold text-[#FF5A00] hover:underline flex items-center gap-1 uppercase tracking-widest mt-4"
            >
              <span>Continue Shopping</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Right Block: Receipt Summary (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="bg-[#111111] border border-[#222222] p-6 rounded-[8px] space-y-6">
              <h3 className="text-xs font-bold tracking-widest text-[#F5F5F5] uppercase border-b border-[#222222] pb-3">
                ORDER RECEIPT SUMMARY
              </h3>

              <div className="space-y-3 font-mono text-xs">
                {/* Total Lines */}
                <div className="flex justify-between text-[#9A9A9A]">
                  <span>Subtotal</span>
                  <span>{formatLKR(total)}</span>
                </div>
                <div className="flex justify-between text-[#9A9A9A] items-center">
                  <span className="flex items-center gap-1">
                    <Truck className="h-3 w-3 text-[#FF5A00]" /> Secure Delivery
                  </span>
                  <span className="text-[#FF5A00] font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-[#9A9A9A] items-center">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3 text-[#FF5A00]" /> Hardware Warranty
                  </span>
                  <span className="text-[#9A9A9A]">Included</span>
                </div>

                <div className="border-t border-[#222222] pt-4 flex justify-between items-end">
                  <span className="text-[#F5F5F5] font-sans font-bold uppercase tracking-tight text-sm">Grand Total</span>
                  <span className="text-lg font-sans font-extrabold text-[#FF5A00] tracking-tight leading-none">
                    {formatLKR(total)}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={handleBuyAll}
                className="w-full flex items-center justify-center gap-2 bg-[#FF5A00] hover:bg-[#FF5A00]/90 text-[#0A0A0A] font-extrabold text-xs uppercase tracking-widest py-4 rounded-[4px] transition-all"
              >
                <span>Buy All on WhatsApp</span>
                <Send className="h-4 w-4" />
              </button>

              <div className="p-3.5 bg-[#0A0A0A] border border-[#222222] rounded-[4px] flex gap-2.5 items-start">
                <ShieldCheck className="h-5 w-5 text-[#FF5A00] shrink-0" />
                <p className="text-[10px] text-[#666666] leading-normal uppercase font-mono">
                  Connecting to WhatsApp will bundle your cart item manifest automatically so agents can verify item inventory directly.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
