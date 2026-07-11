import React, { useState, useEffect } from 'react';
import { Search, Filter, ArrowUpDown } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import productsData from '../data/products.json';

interface StoreViewProps {
  onViewDetails: (product: Product) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const StoreView: React.FC<StoreViewProps> = ({
  onViewDetails,
  selectedCategory,
  setSelectedCategory,
}) => {
  const products: Product[] = productsData as Product[];
  
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'newest'>('default');

  // Hardcoded list of categories matching the specs
  const categories = [
    'All',
    'Laptops',
    'Desktops',
    'Monitors',
    'Keyboards & Mice',
    'Components',
    'Accessories',
  ];

  // Filtering products based on category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      Object.values(product.specs).some((val) =>
        val.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  // Sorting products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'newest') {
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
    }
    return 0; // Default JSON order
  });

  // Reset search and sort when category changes
  useEffect(() => {
    setSearchQuery('');
  }, [selectedCategory]);

  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="border-b border-[#111111] pb-6 mb-8">
          <p className="text-[10px] font-mono text-[#FF5A00] uppercase tracking-widest font-bold">
            Apex Inventory
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F5] mt-1">
            TECH STORE
          </h1>
        </div>

        {/* Filter, Search & Sort Control Panel */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center mb-8">
          
          {/* Categories Horizontal Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none max-w-full">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-200 border ${
                    isActive
                      ? 'bg-[#FF5A00] text-[#0A0A0A] border-[#FF5A00]'
                      : 'bg-[#111111] border-[#222222] text-[#9A9A9A] hover:border-[#FF5A00]/40 hover:text-[#F5F5F5]'
                  } rounded-[4px]`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search & Sort Widgets */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search specs, products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#111111] border border-[#222222] focus:border-[#FF5A00]/60 text-xs text-[#F5F5F5] placeholder-[#666666] pl-9 pr-4 py-2.5 outline-none rounded-[4px] transition-colors"
              />
              <Search className="absolute left-3 top-3 h-3.5 w-3.5 text-[#666666]" />
            </div>

            {/* Sort Select */}
            <div className="relative sm:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-[#111111] border border-[#222222] focus:border-[#FF5A00]/60 text-xs text-[#F5F5F5] py-2.5 pl-3 pr-8 outline-none rounded-[4px] appearance-none cursor-pointer transition-colors"
              >
                <option value="default">Default Catalog</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest Added</option>
              </select>
              <ArrowUpDown className="absolute right-3 top-3 h-3.5 w-3.5 text-[#666666] pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Dynamic Items Counter */}
        <div className="flex items-center justify-between mb-6 text-[10px] font-mono text-[#666666]">
          <span>SHOWING {sortedProducts.length} OF {products.length} AVAILABLE ITEMS</span>
          {selectedCategory !== 'All' && (
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-[#FF5A00] hover:underline uppercase tracking-wider font-bold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} onViewDetails={onViewDetails} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-[#222222] rounded-[6px]">
            <p className="text-sm text-[#9A9A9A]">No products found matching your active filter criteria.</p>
            <p className="text-[10px] text-[#666666] mt-1 uppercase font-mono">Try adjusting your query or resetting category tags.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setSortBy('default');
              }}
              className="mt-4 inline-block bg-[#111111] border border-[#222222] hover:border-[#FF5A00] text-xs font-bold tracking-widest text-[#F5F5F5] hover:text-[#FF5A00] px-4 py-2 uppercase rounded-[4px] transition-all"
            >
              Reset Search & Filter
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
